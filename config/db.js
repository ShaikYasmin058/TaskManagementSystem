// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     console.log("Connecting to MongoDB URI:", process.env.MONGO_URI);
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('DB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;







// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     console.log("Starting DB connection...");
//     console.log("Connecting to MongoDB URI:", process.env.MONGO_URI);

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('DB connection error:', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`✅ MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`❌ MongoDB connection error: ${error.message}`);
//     process.exit(1); // stop server if DB fails
//   }
// };

// module.exports = connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected on port 27015"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
