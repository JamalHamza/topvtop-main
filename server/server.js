require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://auth-app.app'],
    credentials: true,
  })
);

// MongoDB connection
connectDB();

// Routes
app.use('/auth', require('./routes/authRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
