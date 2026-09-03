const express = require('express');
const router = express.Router();
const { handleAIChat } = require('../services/aiService');

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

// GET /api/ai/languages - list supported vernacular languages
router.get('/languages', (req, res) => {
  return res.json({
    success: true,
    languages: [
      { code: 'en', name: 'English', label: 'English' },
      { code: 'hi', name: 'Hindi', label: 'हिन्दी' },
      { code: 'te', name: 'Telugu', label: 'తెలుగు' },
      { code: 'ta', name: 'Tamil', label: 'தமிழ்' },
      { code: 'mr', name: 'Marathi', label: 'मराठी' },
      { code: 'bn', name: 'Bengali', label: 'বাংলা' },
      { code: 'kn', name: 'Kannada', label: 'ಕನ್ನಡ' },
      { code: 'gu', name: 'Gujarati', label: 'ગુજરાતી' }
    ]
  });
});

module.exports = router;
