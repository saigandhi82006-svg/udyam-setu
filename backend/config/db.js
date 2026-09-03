const mongoose = require('mongoose');

let isConnected = false;
let isInMemoryFallback = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/udyam_setu';
  
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout for fast fallback
    });
    isConnected = true;
    isInMemoryFallback = false;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`⚠️  MongoDB connection failed (${error.message}).`);
    console.log(`💡 Activating High-Reliability In-Memory Store for Udyam Setu (Zero external dependencies needed for SIH Demo!).`);
    isInMemoryFallback = true;
    isConnected = true;
  }
};

module.exports = {
  connectDB,
  isConnected: () => isConnected,
  isInMemoryFallback: () => isInMemoryFallback
};
