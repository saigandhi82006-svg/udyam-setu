const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    default: 'Entrepreneur'
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    default: ''
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
    default: 28
  },
  category: {
    type: String,
    enum: ['General', 'OBC', 'SC', 'ST', 'Women Entrepreneur', 'Minority', 'Ex-Servicemen / Differently Abled'],
    default: 'OBC'
  },
  annualIncome: {
    type: Number,
    default: 240000
  },
  businessType: {
    type: String,
    enum: [
      'Food Business',
      'Handicrafts & Handlooms',
      'Retail / Kirana Shop',
      'Agriculture & Allied',
      'Textile & Garments',
      'Manufacturing & Fabrication',
      'Services / Repair Shop',
      'Street Vending',
      'Beauty & Wellness',
      'IT & Digital Services',
      'Dairy & Animal Husbandry'
    ],
    default: 'Food Business'
  },
  experienceYears: {
    type: Number,
    min: 0,
    default: 2
  },
  location: {
    latitude: { type: Number, default: 17.3850 },
    longitude: { type: Number, default: 78.4867 },
    city: { type: String, default: 'Hyderabad' },
    state: { type: String, default: 'Telangana' }
  },
  savedSchemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
