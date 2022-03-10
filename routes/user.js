const express = require('express');

const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  try {
    // let newUser = findOne({ email });
    // if (newUser) {
    //   return res.status(400).json({ msg: 'User already exist' });
    // }
    // newUser = new UserModel({
    //   name,
    //   email,
    //   password: await bcrypt.hash(password, 10),
    // });
    // await newUser.save();

    const newUser = new UserModel(req.body);
    await newUser.save();
  } catch (err) {
    res.status(500).send({ msg: err });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let newUser = findOne({ email });
    if (!newUser) {
      return res.status(400).json({ msg: 'You are not registered' });
    }
    const isMatched = await bcrypt.compare(password, newUser.password);
    if (!isMatched) {
      return res.status(400).json({ msg: 'invalid credentials' });
    }
    res.send('You are logged in');
  } catch (err) {
    res.status(500).send({ msg: err });
  }
});

module.exports = router;
