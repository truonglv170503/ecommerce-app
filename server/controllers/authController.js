const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const sendVerificationEmail= require("../utils/emailService");

exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
      const verificationToken = crypto.randomBytes(20).toString("hex");
      const newUser = new User({ name, email, password, verificationToken });
  
      await newUser.save();
  
      sendVerificationEmail(email, verificationToken);
  
      res.status(201).json({
        message: "Registration successful. Please check your email for verification.",
      });
    } catch (error) {
      res.status(500).json({ message: "Registration failed" });
    }
  };
  
  exports.verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
  
      const user = await User.findOne({ verificationToken: token });
      if (!user) {
        return res.status(404).json({ message: "Invalid verification token" });
      }
  
      user.verified = true;
      user.verificationToken = undefined;
      await user.save();
  
      res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
      res.status(500).json({ message: "Email Verification Failed" });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      console.log("User found:", user); // Debug
  
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await user.comparePassword(password);
      console.log("Password match:", isMatch); // Debug
  
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      if (!user.verified) {
        return res.status(403).json({ message: "Please verify your email first" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          verified: user.verified,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Login failed", error: error.message });
    }
  };
  