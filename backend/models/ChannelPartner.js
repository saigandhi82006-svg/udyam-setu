const mongoose = require('mongoose');

const ChannelPartnerSchema = new mongoose.Schema({
  partnerName: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['Bank', 'KVK', 'CSC', 'DIC', 'MSME Center'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    default: 'Hyderabad'
  },
  state: {
    type: String,
    default: 'Telangana'
  },
  pincode: {
    type: String,
    default: '500001'
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  contactPhone: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    default: 'Helpdesk Officer'
  },
  servicesOffered: [{
    type: String
  }],
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4.5
  },
  workingHours: {
    type: String,
    default: '10:00 AM - 5:00 PM (Mon-Sat)'
  }
}, {
  timestamps: true
});

ChannelPartnerSchema.index({ location: '2dsphere' });

module.exports = mongoose.models.ChannelPartner || mongoose.model('ChannelPartner', ChannelPartnerSchema);
