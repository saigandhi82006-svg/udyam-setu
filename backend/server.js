const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./config/db');
const { seedData } = require('./seed');
const { notFoundHandler, errorHandler } = require('./middleware/error.middleware');

// Route imports
const authRoutes = require('./routes/auth.routes');
const schemesRoutes = require('./routes/schemes.routes');
const aiRoutes = require('./routes/ai.routes');
const partnersRoutes = require('./routes/partners.routes');
const calculatorRoutes = require('./routes/calculator.routes');
const applicationsRoutes = require('./routes/applications.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static assets for test preview & documentation
app.use('/preview', express.static(path.join(__dirname, '../test_harness')));

// API Root Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Udyam Setu REST API',
    version: '1.0.0',
    problemStatement: 'SIH 2026 PS ID 92',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/schemes', schemesRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/calculator', calculatorRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/users', userRoutes);

// Root redirect to preview
app.get('/', (req, res) => {
  res.redirect('/preview');
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
async function startServer() {
  try {
    await connectDB();
    // Auto-seed in-memory store so platform works immediately out of the box
    await seedData();

    app.listen(PORT, () => {
      console.log(`\n======================================================`);
      console.log(`🚀 Udyam Setu Backend running on http://localhost:${PORT}`);
      console.log(`📱 REST API endpoints active under /api/*`);
      console.log(`🌐 Live Interactive Browser Prototype: http://localhost:${PORT}/preview`);
      console.log(`======================================================\n`);
    });
  } catch (error) {
    console.error('Fatal server startup error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

module.exports = app;
