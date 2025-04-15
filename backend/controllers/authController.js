const jwt = require('jsonwebtoken');
const User = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//const crypto = require('crypto');
// exports.register = async (req, res) => {
//   try {
//     const { name, phoneNumber, aadharNumber, drivingLicenseNumber, email, password } = req.body;
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(409).json({ message: 'User already exists with this email.' });
//     }

//     const salt = crypto.randomBytes(16).toString('hex');
//     const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
//     const passwordHash = `${hash}:${salt}`;

//     const newUser = new User({
//       name,
//       phoneNumber,
//       aadharNumber,
//       drivingLicenseNumber,
//       email,
//       passwordHash: password
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       const user = await User.findOne({ email });
//       if (!user) {
//           return res.status(404).send('User not found');
//       }

//       // Check if passwordHash format is correct (i.e., contains both hash and salt)
//       if (!user.passwordHash || !user.passwordHash.includes(':')) {
//           return res.status(500).send("User's password hash is improperly formatted or missing.");
//       }

//       const [storedHash, storedSalt] = user.passwordHash.split(':');
//       // Check if both hash and salt are properly extracted
//       if (!storedHash || !storedSalt) {
//           return res.status(500).send("Error parsing the user's stored password hash or salt.");
//       }

//       const hash = crypto.pbkdf2Sync(password, storedSalt, 10000, 64, 'sha512').toString('hex');

//       if (hash !== storedHash) {
//           return res.status(400).send('Invalid credentials');
//       }

//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token, message: "Login successful" });
//   } catch (error) {
//       console.error("Login error:", error);
//       res.status(500).json({ message: error.message });
//   }
// };
exports.register = async (req, res) => {
  try {
      const { name, phoneNumber, aadharNumber, drivingLicenseNumber, email, password } = req.body;

      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
          return res.status(409).json({ message: 'User already exists with this email.' });
      }

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user object
      const newUser = new User({
          name,
          phoneNumber,
          aadharNumber,
          drivingLicenseNumber,
          email,
          passwordHash: hashedPassword
      });

      // Save the user to the database
      await newUser.save();

      // Send back a response
      res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).send('User not found');
      }

      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
          return res.status(400).send('Invalid credentials');
      }

      // If the password matches, generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, message: "Login successful" });
  } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: error.message });
  }
};