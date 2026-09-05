const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');

// GET /api/users/profile
router.get('/profile', async (req, res) => {
  try {
    const userId = req.query.userId || req.query.phone || req.query.email || 'usr_demo';
    let user = await dataStore.getUser(userId);

    if (!user) {
      // Default profile matching Screen 5 from UI mock
      user = {
        _id: 'usr_demo',
        name: 'Ravi Kumar',
        phone: '9876543210',
        email: 'ravi.kumar@example.com',
        age: 28,
        gender: 'Male',
        hasDisability: false,
        disabilityType: 'None',
        disabilityPercentage: 'None',
        hasUdidCard: false,
        category: 'OBC',
        locationType: 'Rural',
        annualIncome: 240000,
        neededInvestment: 500000,
        businessType: 'Food Business',
        experienceYears: 2,
        education: '8th Pass or Above',
        location: {
          latitude: 17.3850,
          longitude: 78.4867,
          city: 'Hyderabad',
          district: 'Hyderabad',
          state: 'Telangana',
          pincode: '500001'
        },
        savedSchemes: []
      };
      await dataStore.saveUser(user);
    }

    return res.json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/users/profile - Save or Upsert full user profile to MongoDB database
router.post('/profile', async (req, res) => {
  try {
    const {
      userId,
      _id,
      name = 'Ravi Kumar',
      phone = '9876543210',
      email = '',
      age = 28,
      gender = 'Male',
      hasDisability = false,
      disabilityType = 'None',
      disabilityPercentage = 'None',
      hasUdidCard = false,
      category = 'OBC',
      locationType = 'Rural',
      annualIncome = 240000,
      neededInvestment = 500000,
      businessType = 'Food Business',
      experienceYears = 2,
      education = '8th Pass or Above',
      location
    } = req.body;

    const lookupKey = phone || email || (_id && _id.toString().match(/^[0-9a-fA-F]{24}$/) ? _id : null) || (userId && userId.toString().match(/^[0-9a-fA-F]{24}$/) ? userId : null);
    const existing = lookupKey ? ((await dataStore.getUser(lookupKey)) || {}) : {};

    const profilePayload = {
      ...existing,
      name: name.trim(),
      phone: phone.toString().trim(),
      email: (email || '').toString().trim(),
      age: Number(age) || 28,
      gender,
      hasDisability: Boolean(hasDisability),
      disabilityType: hasDisability ? disabilityType : 'None',
      disabilityPercentage: hasDisability ? disabilityPercentage : 'None',
      hasUdidCard: Boolean(hasUdidCard),
      category,
      locationType,
      annualIncome: Number(annualIncome) || 240000,
      neededInvestment: Number(neededInvestment) || 500000,
      businessType,
      experienceYears: Number(experienceYears) || 0,
      education,
      location: location || existing.location || {
        latitude: 17.3850,
        longitude: 78.4867,
        city: 'Hyderabad',
        district: 'Hyderabad',
        state: 'Telangana',
        pincode: '500001'
      }
    };

    const savedUser = await dataStore.saveUser(profilePayload);

    return res.json({
      success: true,
      message: 'User profile details saved to MongoDB database successfully',
      user: savedUser
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// PUT /api/users/profile - update multi-step profiling details
router.put('/profile', async (req, res) => {
  try {
    const {
      userId = 'usr_demo',
      name,
      phone,
      email,
      age,
      gender,
      hasDisability,
      disabilityType,
      disabilityPercentage,
      hasUdidCard,
      category,
      locationType,
      annualIncome,
      neededInvestment,
      businessType,
      experienceYears,
      education,
      location
    } = req.body;

    const existing = await dataStore.getUser(userId) || {};
    const updated = await dataStore.saveUser({
      ...existing,
      _id: userId,
      ...(name && { name }),
      ...(phone && { phone }),
      ...(email !== undefined && { email }),
      ...(age !== undefined && { age: Number(age) }),
      ...(gender && { gender }),
      ...(hasDisability !== undefined && { hasDisability: Boolean(hasDisability) }),
      ...(disabilityType && { disabilityType }),
      ...(disabilityPercentage && { disabilityPercentage }),
      ...(hasUdidCard !== undefined && { hasUdidCard: Boolean(hasUdidCard) }),
      ...(category && { category }),
      ...(locationType && { locationType }),
      ...(annualIncome !== undefined && { annualIncome: Number(annualIncome) }),
      ...(neededInvestment !== undefined && { neededInvestment: Number(neededInvestment) }),
      ...(businessType && { businessType }),
      ...(experienceYears !== undefined && { experienceYears: Number(experienceYears) }),
      ...(education && { education }),
      ...(location && { location })
    });

    return res.json({
      success: true,
      message: 'Profile updated in MongoDB successfully',
      user: updated
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/users/saved-schemes
router.post('/saved-schemes', async (req, res) => {
  try {
    const { userId = 'usr_demo', schemeId } = req.body;
    let user = await dataStore.getUser(userId);
    if (!user) {
      user = { _id: userId, savedSchemes: [] };
    }
    user.savedSchemes = user.savedSchemes || [];

    const index = user.savedSchemes.findIndex(s => s.toString() === schemeId.toString());
    let action = 'saved';
    if (index >= 0) {
      user.savedSchemes.splice(index, 1);
      action = 'removed';
    } else {
      user.savedSchemes.push(schemeId);
    }

    await dataStore.saveUser(user);
    return res.json({
      success: true,
      action,
      savedSchemes: user.savedSchemes
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
