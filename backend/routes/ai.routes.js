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

// GET /api/ai/voice/stream - Streams native studio-quality Indian vernacular audio (Telugu, Hindi, Tamil, etc.)
router.get('/voice/stream', (req, res) => {
  try {
    const { text, lang = 'te' } = req.query;
    if (!text) {
      return res.status(400).send('Missing text parameter');
    }

    // Clean text: strip markdown symbols, currency symbols, and extra newlines
    let cleanText = text
      .replace(/<[^>]*>/g, ' ')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/#{1,6}\s?/g, '')
      .replace(/[•\-\*]\s+/g, ', ')
      .replace(/✨ Source:.*/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Map language parameter to ISO code
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

    // Truncate to first 180 characters for immediate audio stream response
    const snippet = cleanText.substring(0, 180);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langCode}&client=tw-ob&q=${encodeURIComponent(snippet)}`;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    https.get(ttsUrl, options, (audioRes) => {
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      audioRes.pipe(res);
    }).on('error', (err) => {
      console.warn('TTS streaming error:', err.message);
      res.status(500).send('Audio generation failed');
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
