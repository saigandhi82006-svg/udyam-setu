const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema({
  schemeName: {
    type: String,
    required: true,
    trim: true
  },
  shortCode: {
    type: String,
    trim: true
  },
  category: {
    type: String, // e.g., 'Central Government', 'State Government', 'MSME', 'Women Empowerment', 'Rural Development'
    default: 'Central Government'
  },
  targetSector: {
    type: String, // 'Agriculture', 'MSME / Small Business', 'Education / Youth', 'Women Entrepreneur', 'Artisans & Weavers', 'Street Vendors'
    default: 'MSME / Small Business'
  },
  state: {
    type: String, // 'Central', 'Telangana', 'Maharashtra', 'Andhra Pradesh', 'All'
    default: 'Central'
  },
  vernacularNames: {
    hi: { type: String, default: '' },
    te: { type: String, default: '' },
    kn: { type: String, default: '' },
    ta: { type: String, default: '' },
    mr: { type: String, default: '' },
    bn: { type: String, default: '' }
  },
  translations: {
    te: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    },
    hi: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    },
    kn: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    },
    ta: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    },
    mr: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    },
    bn: {
      tagline: { type: String, default: '' },
      description: { type: String, default: '' },
      benefits: [{ type: String }],
      whoCanApply: { type: String, default: '' },
      purpose: { type: String, default: '' },
      loanAmountFormatted: { type: String, default: '' },
      interestRate: { type: String, default: '' },
      repaymentPeriod: { type: String, default: '' },
      requiredDocuments: [{ docName: String, description: String }]
    }
  },
  vernacularDetails: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  embedding: {
    type: [Number], // 768-dimensional vector embedding for semantic search
    default: undefined
  },
  tagline: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  maxGrantLoanAmount: {
    type: Number, // in INR
    required: true
  },
  loanAmountFormatted: {
    type: String, // e.g. "Up to ₹10,00,000"
    default: ''
  },
  interestRate: {
    type: String, // e.g., "8% - 12% (approx.)" or "Subsidized (0% - 7%)"
    default: '8% - 12%'
  },
  interestRateNumeric: {
    type: Number, // for financial calculation default, e.g. 9.5
    default: 9.5
  },
  repaymentPeriod: {
    type: String, // e.g., "Up to 5 Years"
    default: 'Up to 5 Years'
  },
  repaymentPeriodYears: {
    type: Number,
    default: 5
  },
  minAge: {
    type: Number,
    default: 18
  },
  maxIncome: {
    type: Number, // 0 or null means no income cap
    default: 0
  },
  eligibleCategories: [{
    type: String
    // 'General', 'OBC', 'SC', 'ST', 'Women Entrepreneur', 'Minority', 'All'
  }],
  eligibleBusinessTypes: [{
    type: String
    // 'Food Business', 'Handicrafts & Handlooms', 'Retail / Kirana Shop', etc. or 'All'
  }],
  minExperienceYears: {
    type: Number,
    default: 0
  },
  subsidyPercentage: {
    type: Number, // e.g. 15 to 35% subsidy
    default: 0
  },
  whoCanApply: {
    type: String,
    default: 'Micro & Small Enterprises'
  },
  purpose: {
    type: String,
    default: 'Business Expansion, Working Capital, New Business Setup'
  },
  benefits: [{
    type: String
  }],
  requiredDocuments: [{
    docName: { type: String, required: true },
    description: { type: String, default: '' },
    isMandatory: { type: Boolean, default: true }
  }],
  applicationUrl: {
    type: String,
    default: 'https://udyamregistration.gov.in'
  },
  tags: [{
    type: String // e.g. "Low Interest", "Collateral-Free", "High Subsidy", "Fast Process"
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Scheme || mongoose.model('Scheme', SchemeSchema);
