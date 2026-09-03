const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');

// GET /api/users/profile
router.get('/profile', async (req, res) => {
  try {
    const userId = req.query.userId || 'usr_demo';
    let user = await dataStore.getUser(userId);

    if (!user) {
      // Default profile matching Screen 5 from UI mock
      user = {
        _id: 'usr_demo',
        name: 'Ravi Kumar',
        phone: '9876543210',
        email: 'ravi.kumar@example.com',
        age: 28,
        category: 'OBC',
        annualIncome: 240000,
        businessType: 'Food Business',
        experienceYears: 2,
        location: {
          latitude: 17.3850,
          longitude: 78.4867,
          city: 'Hyderabad',
          state: 'Telangana'
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

// PUT /api/users/profile - update multi-step profiling details
router.put('/profile', async (req, res) => {
  try {
    const {
      userId = 'usr_demo',
      name,
      age,
      category,
      annualIncome,
      businessType,
      experienceYears,
      location
    } = req.body;

    const existing = await dataStore.getUser(userId) || {};
    const updated = await dataStore.saveUser({
      ...existing,
      _id: userId,
      ...(name && { name }),
      ...(age !== undefined && { age: Number(age) }),
      ...(category && { category }),
      ...(annualIncome !== undefined && { annualIncome: Number(annualIncome) }),
      ...(businessType && { businessType }),
      ...(experienceYears !== undefined && { experienceYears: Number(experienceYears) }),
      ...(location && { location })
    });

    return res.json({
      success: true,
      message: 'Profile updated successfully',
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
