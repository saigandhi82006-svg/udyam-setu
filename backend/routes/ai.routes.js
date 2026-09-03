const express = require('express');
const router = express.Router();
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

// POST /api/ai/bhashini/speak - Digital India Bhashini Text-to-Speech synthesis endpoint
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

module.exports = router;
