const net = require('net');
const dns = require('dns');
const mongoose = require('mongoose');

// Configure reliable DNS servers for MongoDB Atlas SRV lookups across all networks
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {}

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
    const isLocal = uri.includes('127.0.0.1') || uri.includes('localhost');
    const connectOptions = {
      serverSelectionTimeoutMS: isLocal ? 2500 : 8000
    };
    if (isLocal && !uri.startsWith('mongodb+srv://')) {
      connectOptions.directConnection = true;
    }

    const conn = await mongoose.connect(uri, connectOptions);
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
