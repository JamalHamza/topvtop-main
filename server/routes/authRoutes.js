const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/User');
const validateEmail = require('../utils/emailValidators');
const validatePassword = require('../utils/passwordValidators');

const router = express.Router();

// Register New User
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // ! Validation =====
    if (!username || !email || !password) {
      res.status(400);
      throw new Error('Please fill in all the required fields ');
    }

    if (!validateEmail(email) || !validatePassword(password)) {
      throw new Error('Invalid Password or Email entered');
    }

    // ! Check if user already existed
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).send('User Already existed');
    }

    // ! Hashed Password

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.send('User registered successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ! Validation =====
    if (!email || !password) {
      res.status(400);
      throw new Error('Please fill in all the required fields ');
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send('Invalid password');
    }

    console.log('login');
    req.session.user = user;
    res.send('Logged in successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Logout User
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      res.send('Logged out successfully');
    }
  });
});

module.exports = router;
