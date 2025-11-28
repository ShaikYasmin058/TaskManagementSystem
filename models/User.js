// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin','user'], default: 'user' }
// }, { timestamps: true });

// module.exports = mongoose.model('User', UserSchema);

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);
// Import mongoose





// import mongoose from "mongoose";

// // Define the User schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// // Create User model
// const User = mongoose.model("User", userSchema);

// // MongoDB connection URI
// const MONGO_URI = "mongodb://127.0.0.1:27015/mySecondDB";

// async function main() {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("Connected to MongoDB!");

//     // Step 1: Remove users with null emails
//     const deleteResult = await User.deleteMany({ email: null });
//     console.log(`Deleted ${deleteResult.deletedCount} users with null emails.`);

//     // Step 2: Optionally, remove duplicate emails (keeps first one)
//     const duplicates = await User.aggregate([
//       { $group: { _id: "$email", count: { $sum: 1 }, ids: { $push: "$_id" } } },
//       { $match: { count: { $gt: 1 }, _id: { $ne: null } } }
//     ]);

//     for (const dup of duplicates) {
//       // Keep the first document, remove the rest
//       const idsToDelete = dup.ids.slice(1);
//       await User.deleteMany({ _id: { $in: idsToDelete } });
//       console.log(`Removed duplicate emails for: ${dup._id}`);
//     }

//     // Step 3: Insert new users safely
//     const usersToInsert = [
//       { name: "Alice", email: "alice@example.com", password: "12345" },
//       { name: "Bob", email: "bob@example.com", password: "12345" },
//       { name: "Charlie", email: "charlie@example.com", password: "12345" }
//     ];

//     for (const userData of usersToInsert) {
//       try {
//         const user = new User(userData);
//         await user.save();
//         console.log(`Inserted user: ${user.name}`);
//       } catch (err) {
//         if (err.code === 11000) {
//           console.log(`Skipped duplicate email: ${userData.email}`);
//         } else {
//           console.error(err);
//         }
//       }
//     }

//     console.log("All done!");
//     await mongoose.disconnect();
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// main();





import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["user", "manager", "admin"], 
    default: "user" 
  }
});

export const User = mongoose.model("User", userSchema);
