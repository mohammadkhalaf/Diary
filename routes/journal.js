const express = require('express');
const JournalModel = require('../models/Journal');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newItem = new JournalModel(req.body);
    await newItem.save();
    res.send('works!');
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
module.exports = router;
