const net = require('net');
const mongoose = require('mongoose');

let isConnected = false;
let isInMemoryFallback = false;

const checkMongoServer = (host, port) => {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, host);
  });
};

const connectDB = async () => {
  if (isConnected) return;
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/udyam_setu';
  
  try {
    if (!process.env.MONGODB_URI) {
      const isPortOpen = await checkMongoServer('127.0.0.1', 27017);
      if (!isPortOpen) {
        throw new Error('Local MongoDB port 27017 is not accessible');
      }
    }
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout for fast fallback
      directConnection: true
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
