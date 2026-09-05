const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');
const { matchSchemesForUser } = require('../services/matchingEngine');
const { COMPREHENSIVE_GOVT_SCHEMES } = require('../data/comprehensiveSchemes');

// Universal helper to localize scheme record based on requested language
function localizeSchemeRecord(scheme, lang) {
  if (!scheme || !lang || lang === 'en') return scheme;
  const item = scheme.toObject ? scheme.toObject() : { ...scheme };
  const rawCode = (item.shortCode || item.schemeId || item.schemeName || '').toUpperCase().trim();
  
  let details = null;
  if (item.vernacularDetails && item.vernacularDetails[lang]) {
    details = item.vernacularDetails[lang];
  } else {
    // Check in COMPREHENSIVE_GOVT_SCHEMES
    const match = COMPREHENSIVE_GOVT_SCHEMES.find(c => 
      (c.shortCode && c.shortCode.toUpperCase().trim() === rawCode) ||
      (c.schemeId && c.schemeId.toUpperCase().trim() === rawCode) ||
      (c.schemeName && c.schemeName.toUpperCase().trim() === rawCode) ||
      (c.shortCode && rawCode.includes(c.shortCode.toUpperCase().trim())) ||
      (c.schemeName && rawCode.includes(c.schemeName.toUpperCase().trim()))
    );
    if (match && match.vernacularDetails && match.vernacularDetails[lang]) {
      details = match.vernacularDetails[lang];
    }
  }

  if (details) {
    item.schemeName = details.name || item.schemeName;
    item.displayName = details.name || item.displayName || item.schemeName;
    item.vernacularName = details.name || item.vernacularName;
    item.description = details.description || item.description;
    item.loanAmountFormatted = details.loanAmount || item.loanAmountFormatted;
    item.interestRate = details.interestRate || item.interestRate;
    item.repaymentPeriod = details.repaymentPeriod || item.repaymentPeriod;
    item.whoCanApply = details.whoCanApply || item.whoCanApply;
    item.purpose = details.purpose || item.purpose;
    if (details.benefits && details.benefits.length) {
      item.benefits = details.benefits;
    }
    if (details.requiredDocuments && details.requiredDocuments.length) {
      item.requiredDocuments = details.requiredDocuments;
    }
    if (details.eligibleCategories && details.eligibleCategories.length) {
      item.eligibleCategories = details.eligibleCategories;
    }
    if (details.eligibleBusinessTypes && details.eligibleBusinessTypes.length) {
      item.eligibleBusinessTypes = details.eligibleBusinessTypes;
    }
    if (details.minAge) item.minAge = details.minAge;
    if (details.incomeCap) item.incomeCap = details.incomeCap;
  } else if (item.vernacularNames && item.vernacularNames[lang]) {
    item.vernacularName = item.vernacularNames[lang];
    item.displayName = item.vernacularNames[lang];
    item.schemeName = item.vernacularNames[lang];
  }

  item.requestedLanguage = lang;
  return item;
}

// GET /api/schemes - list all active schemes
router.get('/', async (req, res) => {
  try {
    const { category, businessType, search, lang: queryLang } = req.query;
    const lang = (queryLang || req.headers['x-language'] || '').toLowerCase();
    let schemes = await dataStore.getSchemes();

    if (category) {
      schemes = schemes.filter(s => s.category && s.category.toLowerCase().includes(category.toLowerCase()));
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
        (s.schemeName && s.schemeName.toLowerCase().includes(q)) || 
        (s.tagline && s.tagline.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q))
      );
    }

    if (lang) {
      schemes = schemes.map(s => localizeSchemeRecord(s, lang));
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
    const lang = (req.query.lang || req.headers['x-language'] || '').toLowerCase();
    let allSchemes = await dataStore.getSchemes();
    if (lang) {
      allSchemes = allSchemes.map(s => localizeSchemeRecord(s, lang));
    }
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
      category = 'General',
      annualIncome = 0,
      neededInvestment = 0,
      investmentAmount = 0,
      businessType = 'Food Business',
      experienceYears = 0,
      gender = 'Male',
      hasDisability = false,
      disabilityType = 'None',
      disabilityPercentage = 'None',
      hasUdidCard = false,
      locationType = 'Rural',
      education = '8th Pass or Above',
      language = ''
    } = req.body;

    const lang = (language || req.query.lang || req.headers['x-language'] || '').toLowerCase();
    const finalInvestment = Number(neededInvestment || investmentAmount || 0);

    let allSchemes = await dataStore.getSchemes();
    const matches = matchSchemesForUser(
      {
        age: Number(age),
        category,
        annualIncome: Number(annualIncome),
        neededInvestment: finalInvestment,
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

    // If language is requested, localize the matched schemes
    const localizedMatches = matches.map(m => {
      if (!lang || lang === 'en') return m;
      return {
        ...m,
        scheme: localizeSchemeRecord(m.scheme, lang)
      };
    });

    return res.json({
      success: true,
      userProfile: {
        age: Number(age),
        category,
        annualIncome: Number(annualIncome),
        neededInvestment: finalInvestment,
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
      matchedCount: localizedMatches.length,
      matches: localizedMatches
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

    const localizedResult = localizeSchemeRecord(resultScheme, lang);
    return res.json({ success: true, scheme: localizedResult, language: lang || 'en' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
