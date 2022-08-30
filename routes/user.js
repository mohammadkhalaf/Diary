const express = require('express');

const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json({ msg: 'Please Provide all values' });
  }
  const userExist = await UserModel.findOne({ email });

  if (userExist) {
    res.status(400).json({ msg: 'Email is already exist' });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await UserModel.create({
    name,
    hashedPassword,
    email,
  });
  res.send(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Passwords do not match');
    }
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
