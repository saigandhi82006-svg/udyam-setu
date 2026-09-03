const express = require('express');
const router = express.Router();
const dataStore = require('../services/dataStore');

// GET /api/applications - list all applications for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const apps = await dataStore.getApplications(userId);
    return res.json({
      success: true,
      count: apps.length,
      applications: apps
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/applications - submit new application for a scheme
router.post('/', async (req, res) => {
  try {
    const { userId, schemeId, requestedAmount, proposedBusiness, assignedPartnerId } = req.body;

    const scheme = await dataStore.getSchemeById(schemeId);
    if (!scheme) {
      return res.status(404).json({ success: false, message: 'Scheme not found' });
    }

    // Populate initial document checklist from scheme required documents
    const initialDocs = (scheme.requiredDocuments || []).map(doc => ({
      docName: doc.docName,
      status: ['Aadhaar Card', 'PAN Card', 'Address Proof'].includes(doc.docName) ? 'Uploaded' : 'Pending',
      fileSize: ['Aadhaar Card', 'PAN Card', 'Address Proof'].includes(doc.docName) ? '1.4 MB' : '',
      uploadedAt: ['Aadhaar Card', 'PAN Card', 'Address Proof'].includes(doc.docName) ? new Date() : null
    }));

    const application = await dataStore.createApplication({
      userId: userId || 'guest_user_101',
      schemeId: scheme._id,
      schemeName: scheme.schemeName,
      requestedAmount: requestedAmount || scheme.maxGrantLoanAmount || 500000,
      proposedBusiness: proposedBusiness || 'Micro Food Processing Enterprise',
      assignedPartnerId: assignedPartnerId || null,
      uploadedDocuments: initialDocs,
      status: 'Submitted'
    });

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully to partner channel!',
      application
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/applications/:id/checklist - dynamic document checklist for scheme/application
router.get('/:id/checklist', async (req, res) => {
  try {
    const apps = await dataStore.getApplications();
    const app = apps.find(a => a._id.toString() === req.params.id || a.trackingId === req.params.id);

    if (!app) {
      // Return default template checklist for Mudra / PMEGP
      return res.json({
        success: true,
        schemeName: 'PM Mudra Yojana',
        documents: [
          { docName: 'Aadhaar Card', status: 'Uploaded', fileSize: '1.2 MB', mandatory: true },
          { docName: 'PAN Card', status: 'Uploaded', fileSize: '0.8 MB', mandatory: true },
          { docName: 'Business Plan', status: 'Pending', fileSize: '', mandatory: true },
          { docName: 'Bank Statement', status: 'Pending', fileSize: '', mandatory: true },
          { docName: 'Address Proof', status: 'Uploaded', fileSize: '2.1 MB', mandatory: true }
        ]
      });
    }

    return res.json({
      success: true,
      schemeName: app.schemeName,
      trackingId: app.trackingId,
      status: app.status,
      documents: app.uploadedDocuments
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/applications/:id/documents - upload/update document
router.post('/:id/documents', async (req, res) => {
  try {
    const { docName, fileName = 'document.pdf', fileSize = '1.5 MB', status = 'Uploaded' } = req.body;
    const apps = await dataStore.getApplications();
    const app = apps.find(a => a._id.toString() === req.params.id || a.trackingId === req.params.id);

    if (!app) {
      return res.json({
        success: true,
        message: 'Document status updated',
        document: { docName, fileName, fileSize, status: 'Uploaded', uploadedAt: new Date() }
      });
    }

    const docIndex = app.uploadedDocuments.findIndex(d => d.docName.toLowerCase() === docName.toLowerCase());
    if (docIndex >= 0) {
      app.uploadedDocuments[docIndex].status = status;
      app.uploadedDocuments[docIndex].fileName = fileName;
      app.uploadedDocuments[docIndex].fileSize = fileSize;
      app.uploadedDocuments[docIndex].uploadedAt = new Date();
    } else {
      app.uploadedDocuments.push({
        docName,
        fileName,
        fileSize,
        status,
        uploadedAt: new Date()
      });
    }

    return res.json({
      success: true,
      message: `Document "${docName}" updated to ${status}`,
      documents: app.uploadedDocuments
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
