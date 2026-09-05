const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');

// GET /api/partners/nearby?lat=X&lng=Y&radius=25&type=Bank&locationName=Perkipalem
router.get('/nearby', async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat) || 17.3850; // Default to central coordinates
    const lng = parseFloat(req.query.lng) || 78.4867;
    const radius = parseFloat(req.query.radius) || 25;
    const type = req.query.type || null;
    const locationName = req.query.locationName || req.query.label || null;

    const partners = await dataStore.getNearbyPartners(lat, lng, radius, type, locationName);

    return res.json({
      success: true,
      userCoordinates: { lat, lng },
      locationName: locationName || 'Local Area',
      radiusKm: radius,
      filterType: type || 'All',
      count: partners.length,
      partners
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/partners/:id
router.get('/:id', async (req, res) => {
  try {
    const partners = await dataStore.getNearbyPartners(17.3850, 78.4867, 1000);
    const partner = partners.find(p => p._id.toString() === req.params.id);
    if (!partner) {
      return res.status(404).json({ success: false, message: 'Partner not found' });
    }
    return res.json({ success: true, partner });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
