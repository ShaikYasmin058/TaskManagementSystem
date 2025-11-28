// require('dotenv').config(); // no need for extra path now
// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const userRoutes = require('./routes/userRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// app.get('/', (req, res) => res.send('GreenTask Pro API'));

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// Load environment variables first
// require('dotenv').config();
// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const userRoutes = require('./routes/userRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send('GreenTask Pro API');
// });

// // Start server
// const PORT = process.env.PORT || 5002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// import express from "express";
// import mongoose from "mongoose";

// const app = express();
// const PORT = 5003;

// // Connect to MongoDB
// const MONGO_URL = "mongodb://127.0.0.1:27015/greentask";

// mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected:", MONGO_URL))
// .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Middleware
// app.use(express.json());

// // Example route
// app.get("/", (req, res) => res.send("Server is running"));

// // Start server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";


import { User } from "./models/User.js";

// import User from "./models/User.js"; // import the User model

const app = express();
const PORT = 5003;

// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27015/greentask";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected:", MONGO_URL))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());       // allow frontend requests
app.use(express.json());

// Example route
app.get("/", (req, res) => res.send("Server is running"));

// REGISTER route
app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // create token
    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", { expiresIn: "1d" });

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
