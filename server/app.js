// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();

app.use(bodyParser.json());

console.log('call app.js of APIs');

app.post('/api/create-user', async (req, res) => {
  console.log('API for creating user works');
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    res.json({ success: true, user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);

  try {
    const user = await User.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password); // Compare hashed password
      if (match) {
        console.log('login');
        res.json({ success: true, message: 'Login Successfully' });
      } else {
        console.log('not login');
        res.json({ success: false, message: 'Fail to Login' });
      }
    } else {
      console.log('notworking');
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = app;
