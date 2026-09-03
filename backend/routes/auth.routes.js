const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');

// In-memory OTP store for simulation
const otpStore = new Map();

// POST /api/auth/send-otp
router.post('/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    // Generate 6-digit OTP (for hackathon testing, default fixed OTP or randomized)
    const simulatedOtp = '123456';
    otpStore.set(phone, {
      otp: simulatedOtp,
      expiresAt: Date.now() + 5 * 60 * 1000 // 5 mins
    });

    console.log(`[SMS Gateway Simulated] OTP sent to ${phone}: ${simulatedOtp}`);

    return res.json({
      success: true,
      message: `OTP sent successfully to +91 ${phone}. (Use test OTP: 123456)`,
      simulatedOtp: simulatedOtp
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/auth/verify-otp
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ success: false, message: 'Phone and OTP are required' });
    }

    const record = otpStore.get(phone);
    if (!record || (record.otp !== otp && otp !== '123456')) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP. (Default test OTP is 123456)' });
    }

    // Retrieve or create user
    let user = await dataStore.getUser(phone);
    if (!user) {
      user = await dataStore.saveUser({
        name: 'Entrepreneur ' + phone.slice(-4),
        phone: phone,
        age: 28,
        category: 'OBC',
        annualIncome: 240000,
        businessType: 'Food Business',
        experienceYears: 2
      });
    }

    return res.json({
      success: true,
      message: 'Authentication successful',
      token: 'jwt_mock_token_' + user._id,
      user
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/auth/google
router.post('/google', async (req, res) => {
  try {
    const { email, name, googleId } = req.body;
    const userEmail = email || 'entrepreneur@gmail.com';
    const userName = name || 'Google Entrepreneur';

    let user = await dataStore.saveUser({
      name: userName,
      email: userEmail,
      phone: '9876543210',
      age: 29,
      category: 'OBC',
      annualIncome: 280000,
      businessType: 'Retail / Kirana Shop',
      experienceYears: 3
    });

    return res.json({
      success: true,
      message: 'Logged in with Google',
      token: 'jwt_mock_google_token_' + user._id,
      user
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/auth/guest
router.post('/guest', async (req, res) => {
  try {
    const guestUser = await dataStore.saveUser({
      name: 'Guest Entrepreneur',
      phone: '9000000001',
      age: 28,
      category: 'OBC',
      annualIncome: 240000,
      businessType: 'Food Business',
      experienceYears: 2,
      isGuest: true
    });

    return res.json({
      success: true,
      message: 'Logged in as Guest',
      token: 'jwt_guest_token_' + guestUser._id,
      user: guestUser
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
