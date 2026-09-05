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
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Transgender / Other'],
    default: 'Male'
  },
  hasDisability: {
    type: Boolean,
    default: false
  },
  disabilityType: {
    type: String,
    enum: ['None', 'Locomotor / Physical', 'Visual Impairment', 'Hearing / Speech Impairment', 'Intellectual / Mental', 'Multiple Disabilities', 'Other PwD Category'],
    default: 'None'
  },
  disabilityPercentage: {
    type: String,
    default: 'None'
  },
  hasUdidCard: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['General', 'OBC', 'SC', 'ST', 'Women Entrepreneur', 'Minority', 'Ex-Servicemen', 'Differently Abled (Divyangjan)'],
    default: 'OBC'
  },
  locationType: {
    type: String,
    enum: ['Rural', 'Urban'],
    default: 'Rural'
  },
  education: {
    type: String,
    default: '8th Pass or Above'
  },
  annualIncome: {
    type: Number,
    default: 240000
  },
  neededInvestment: {
    type: Number,
    default: 500000
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
    district: { type: String, default: 'Hyderabad' },
    state: { type: String, default: 'Telangana' },
    pincode: { type: String, default: '500001' }
  },
  savedSchemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

