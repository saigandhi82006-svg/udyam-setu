const express = require('express');
const router = express.Router();
const https = require('https');
const { handleAIChat } = require('../services/aiService');
const { SUPPORTED_BHASHINI_LANGUAGES, synthesizeVoicePayload } = require('../services/bhashiniService');

// POST /api/ai/chat - conversational AI assistant for rural entrepreneurs
router.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [], language = 'English', userProfile = null } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, message: 'Message cannot be empty' });
    }

    const aiResult = await handleAIChat({
      message,
      conversationHistory,
      language,
      userProfile
    });

    return res.json({
      success: true,
      ...aiResult
    });
  } catch (error) {
    console.error('AI chat route error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process AI chat query',
      error: error.message
    });
  }
});

// GET /api/ai/languages - list supported vernacular languages (Digital India BHASHINI)
router.get('/languages', (req, res) => {
  return res.json({
    success: true,
    engine: 'Digital India BHASHINI (MeitY)',
    languages: SUPPORTED_BHASHINI_LANGUAGES
  });
});

// POST /api/ai/bhashini/speak - Digital India Bhashini Text-to-Speech synthesis metadata
router.post('/bhashini/speak', (req, res) => {
  try {
    const { text, languageCode = 'hi', speed = 0.85 } = req.body;

    if (!text) {
      return res.status(400).json({ success: false, message: 'Text is required for voice synthesis' });
    }

    const payload = synthesizeVoicePayload({ text, languageCode, speed });
    return res.json(payload);
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Voice synthesis error', error: error.message });
  }
});

// Helper: split text into natural sentence chunks under 150 characters
function splitTextIntoSentences(text, maxLen = 150) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (!clean) return [];

  // Match sentences on periods, exclamation marks, question marks, newlines, or Indian danda (।)
  const sentences = clean.match(/[^.!?\n।]+[.!?\n।]+|[^.!?\n।]+$/g) || [clean];
  const chunks = [];
  let current = '';

  for (let s of sentences) {
    s = s.trim();
    if (!s) continue;
    if ((current + ' ' + s).trim().length <= maxLen) {
      current = (current + ' ' + s).trim();
    } else {
      if (current) chunks.push(current);
      if (s.length > maxLen) {
        // Break long sentence on commas or spaces
        const parts = s.match(new RegExp('.{1,' + maxLen + '}(?:[,\\s]|$)', 'g')) || [s];
        for (let p of parts) {
          if (p && p.trim()) chunks.push(p.trim());
        }
        current = '';
      } else {
        current = s;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

// Helper: fetch single MP3 audio chunk from Google TTS
function fetchTTSAudioBuffer(chunk, langCode) {
  return new Promise((resolve) => {
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langCode}&client=tw-ob&q=${encodeURIComponent(chunk)}`;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(ttsUrl, options, (audioRes) => {
      const data = [];
      audioRes.on('data', c => data.push(c));
      audioRes.on('end', () => resolve(Buffer.concat(data)));
      audioRes.on('error', () => resolve(Buffer.alloc(0)));
    }).on('error', () => resolve(Buffer.alloc(0)));
  });
}

// Master voice processor to speak 100% of the entire generated context
async function processFullVoiceAudio(rawText, lang, res) {
  try {
    if (!rawText) {
      return res.status(400).send('Missing text parameter');
    }

    // Clean text: strip markdown symbols, URLs, bullet points
    let cleanText = rawText
      .replace(/<[^>]*>/g, ' ')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/[•\-\*]\s+/g, ', ')
      .replace(/✨ Source:.*/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Map language parameter to ISO code and expand Indian currency
    let langCode = 'te';
    const l = (lang || '').toLowerCase();
    if (l.includes('hindi') || l === 'hi') {
      langCode = 'hi';
      cleanText = cleanText.replace(/₹/g, ' रुपये ');
    } else if (l.includes('telugu') || l === 'te') {
      langCode = 'te';
      cleanText = cleanText.replace(/₹/g, ' రూపాయలు ');
    } else if (l.includes('tamil') || l === 'ta') {
      langCode = 'ta';
      cleanText = cleanText.replace(/₹/g, ' ரூபாய் ');
    } else if (l.includes('marathi') || l === 'mr') {
      langCode = 'mr';
      cleanText = cleanText.replace(/₹/g, ' रुपये ');
    } else if (l.includes('kannada') || l === 'kn') {
      langCode = 'kn';
      cleanText = cleanText.replace(/₹/g, ' ರೂಪಾಯಿ ');
    } else if (l.includes('bengali') || l === 'bn') {
      langCode = 'bn';
      cleanText = cleanText.replace(/₹/g, ' টাকা ');
    } else {
      langCode = 'en';
      cleanText = cleanText.replace(/₹/g, ' Rupees ');
    }

    // Split entire 100% text into manageable sentence chunks
    const chunks = splitTextIntoSentences(cleanText, 150);

    if (chunks.length === 0) {
      return res.status(400).send('No readable text found');
    }

    // Fetch all audio chunks in parallel for high speed
    const audioBuffers = await Promise.all(chunks.map(chunk => fetchTTSAudioBuffer(chunk, langCode)));

    // Concatenate all MP3 audio buffers into one continuous 100% full-speech stream
    const combinedBuffer = Buffer.concat(audioBuffers.filter(b => b.length > 0));

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', combinedBuffer.length);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.end(combinedBuffer);
  } catch (err) {
    console.error('TTS Full Stream Error:', err);
    return res.status(500).send(err.message);
  }
}

// GET /api/ai/voice/stream - Streams 100% full-text audio via query params
router.get('/voice/stream', (req, res) => {
  const { text, lang = 'te' } = req.query;
  processFullVoiceAudio(text, lang, res);
});

// POST /api/ai/voice/stream - Streams 100% full-text audio via JSON body (for long Gemini answers)
router.post('/voice/stream', (req, res) => {
  const { text, lang = 'te' } = req.body;
  processFullVoiceAudio(text, lang, res);
});

module.exports = router;
