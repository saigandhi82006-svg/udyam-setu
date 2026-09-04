const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');
const { matchSchemesForUser } = require('../services/matchingEngine');
const { COMPREHENSIVE_GOVT_SCHEMES } = require('../data/comprehensiveSchemes');

// GET /api/schemes - list all active schemes
router.get('/', async (req, res) => {
  try {
    const { category, businessType, search, lang: queryLang } = req.query;
    const lang = (queryLang || req.headers['x-language'] || '').toLowerCase();
    let schemes = await dataStore.getSchemes();

    if (category) {
      schemes = schemes.filter(s => s.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (businessType) {
      schemes = schemes.filter(s => 
        s.eligibleBusinessTypes && (
          s.eligibleBusinessTypes.includes('All') || 
          s.eligibleBusinessTypes.includes(businessType)
        )
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

    if (lang) {
      schemes = schemes.map(s => {
        const item = s.toObject ? s.toObject() : { ...s };
        if (item.vernacularNames && item.vernacularNames[lang]) {
          item.vernacularName = item.vernacularNames[lang];
        }
        return item;
      });
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

// GET /api/schemes/by-business-type - get schemes categorized across all 8 enterprise types
router.get('/by-business-type', async (req, res) => {
  try {
    const allSchemes = await dataStore.getSchemes();
    const businessTypes = dataStore.getBusinessTypesCatalog();
    
    const catalog = {};
    for (const type of businessTypes) {
      catalog[type] = allSchemes.filter(s =>
        s.eligibleBusinessTypes && (
          s.eligibleBusinessTypes.includes(type) ||
          s.eligibleBusinessTypes.includes('All')
        )
      );
    }

    return res.json({
      success: true,
      businessTypes,
      catalog
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
    const rawId = decodeURIComponent(req.params.id || '');
    const scheme = await dataStore.getSchemeById(rawId);
    if (!scheme) {
      return res.status(404).json({ success: false, message: 'Scheme not found' });
    }

    const lang = (req.query.lang || req.headers['x-language'] || '').toLowerCase();
    const resultScheme = typeof scheme.toObject === 'function' ? scheme.toObject() : { ...scheme };

    // If vernacularNames is missing or empty, search COMPREHENSIVE_GOVT_SCHEMES
    if (!resultScheme.vernacularNames || Object.keys(resultScheme.vernacularNames).length === 0) {
      const matchComp = COMPREHENSIVE_GOVT_SCHEMES.find(c =>
        (c.shortCode && resultScheme.shortCode && c.shortCode.toLowerCase() === resultScheme.shortCode.toLowerCase()) ||
        (c.schemeName && resultScheme.schemeName && (
          c.schemeName.toLowerCase() === resultScheme.schemeName.toLowerCase() ||
          c.schemeName.toLowerCase().includes(resultScheme.schemeName.toLowerCase()) ||
          resultScheme.schemeName.toLowerCase().includes(c.schemeName.toLowerCase())
        ))
      );
      if (matchComp && matchComp.vernacularNames) {
        resultScheme.vernacularNames = matchComp.vernacularNames;
      }
    }

    if (lang && resultScheme.vernacularNames && resultScheme.vernacularNames[lang]) {
      resultScheme.vernacularName = resultScheme.vernacularNames[lang];
      resultScheme.requestedLanguage = lang;
    }

    return res.json({ success: true, scheme: resultScheme, language: lang || 'en' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
