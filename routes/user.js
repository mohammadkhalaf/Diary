const express = require('express');

const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json({ msg: 'Please Provide all values' });
    return;
  }
  const userExist = await UserModel.findOne({ email });

  if (userExist) {
    res.status(400);
    res.json({ msg: 'Email is already registered' });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);

  const user = await UserModel.create({
    name,
    password: hashedPassword,
    email,
  });
  res.status(201).json({ msg: user });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = await UserModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const id = user._id;
    res.status(200).json({
      email: user.email,
      name: user.name,
      token: generateToken(id),
      id,
    });
  } else {
    res.status(400).json({ msg: 'Invalid credentials' });
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '30d' });
};

module.exports = router;
