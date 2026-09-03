const mongoose = require('mongoose');

const UploadedDocumentSchema = new mongoose.Schema({
  docName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: ''
  },
  fileName: {
    type: String,
    default: ''
  },
  fileType: {
    type: String,
    default: 'image/jpeg'
  },
  fileSize: {
    type: String,
    default: '1.2 MB'
  },
  status: {
    type: String,
    enum: ['Uploaded', 'Pending', 'Verified', 'Rejected'],
    default: 'Pending'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const ApplicationSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    unique: true,
    required: true,
    default: () => 'UDS-' + Math.floor(100000 + Math.random() * 900000)
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  schemeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme',
    required: true
  },
  requestedAmount: {
    type: Number,
    default: 500000
  },
  proposedBusiness: {
    type: String,
    default: 'Food Processing / Retail Venture'
  },
  status: {
    type: String,
    enum: ['Draft', 'Submitted', 'Under Review', 'Verified by Partner', 'Approved', 'Disbursed', 'Rejected'],
    default: 'Submitted'
  },
  assignedPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChannelPartner'
  },
  uploadedDocuments: [UploadedDocumentSchema],
  remarks: {
    type: String,
    default: 'Application initiated via Udyam Setu mobile portal.'
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
