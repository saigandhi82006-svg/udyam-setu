const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');
const { matchSchemesForUser } = require('../services/matchingEngine');

// GET /api/schemes - list all active schemes
router.get('/', async (req, res) => {
  try {
    const { category, businessType, search } = req.query;
    let schemes = await dataStore.getSchemes();

    if (category) {
      schemes = schemes.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (businessType) {
      schemes = schemes.filter(s => 
        s.eligibleBusinessTypes.includes('All') || 
        s.eligibleBusinessTypes.includes(businessType)
      );
    }
    if (search) {
      const q = search.toLowerCase();
      schemes = schemes.filter(s => 
        s.schemeName.toLowerCase().includes(q) || 
        (s.tagline && s.tagline.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q))
      );
    }

    return res.json({
      success: true,
      count: schemes.length,
      schemes
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/schemes/match - Deterministic rule-based matching engine
router.post('/match', async (req, res) => {
  try {
    const {
      age = 28,
      category = 'OBC',
      annualIncome = 240000,
      businessType = 'Food Business',
      experienceYears = 2,
      gender = 'Male',
      hasDisability = false,
      disabilityType = 'None',
      disabilityPercentage = 'None',
      hasUdidCard = false,
      locationType = 'Rural',
      education = '8th Pass or Above'
    } = req.body;

    const allSchemes = await dataStore.getSchemes();
    const matches = matchSchemesForUser(
      {
        age: Number(age),
        category,
        annualIncome: Number(annualIncome),
        businessType,
        experienceYears: Number(experienceYears),
        gender,
        hasDisability,
        disabilityType,
        disabilityPercentage,
        hasUdidCard,
        locationType,
        education
      },
      allSchemes
    );

    return res.json({
      success: true,
      userProfile: {
        age: Number(age),
        category,
        annualIncome: Number(annualIncome),
        businessType,
        experienceYears: Number(experienceYears),
        gender,
        hasDisability,
        disabilityType,
        disabilityPercentage,
        hasUdidCard,
        locationType,
        education
      },
      matchedCount: matches.length,
      matches
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/schemes/:id - scheme details
router.get('/:id', async (req, res) => {
  try {
    const scheme = await dataStore.getSchemeById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ success: false, message: 'Scheme not found' });
    }
    return res.json({ success: true, scheme });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
