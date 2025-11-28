// require('dotenv').config({ path: './.env' });
// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


// const connectDB = require('./config/db');
// const User = require('./models/User');
// const bcrypt = require('bcryptjs');

// const seed = async () => {
//   try {
//     console.log("Starting DB connection...");
//     await connectDB();

//     const email = 'admin@greenpodlabs.com';
//     const existing = await User.findOne({ email });
//     if (existing) {
//       console.log('Admin already exists');
//       process.exit(0);
//     }

//     const hashed = await bcrypt.hash('Admin@123', 10);
//     const admin = await User.create({
//       name: 'GreenPod Admin',
//       email,
//       password: hashed,
//       role: 'admin',
//     });

//     console.log('Admin created:', admin.email);
//     process.exit(0);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// seed();









require('dotenv').config({ path: './.env' });
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    console.log('Starting DB connection...');
    await connectDB();

    const email = 'admin@greenpodlabs.com';
    const existing = await User.findOne({ email });
    if (existing) {
      console.log('Admin already exists:', email);
    } else {
      const hashed = await bcrypt.hash('Admin@123', 10);
      const admin = await User.create({
        name: 'GreenPod Admin',
        email,
        password: hashed,
        role: 'admin',
      });
      console.log('Admin created successfully:', admin.email);
    }

    // Close DB connection properly
    await mongoose.connection.close();
    console.log('MongoDB connection closed.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding admin:', err);
    process.exit(1);
  }
};

seedAdmin();
