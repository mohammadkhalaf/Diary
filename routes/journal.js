const express = require('express');
const JournalModel = require('../models/Journal');
const router = express.Router();

router.post('/additem', async (req, res) => {
  try {
    const newItem = new JournalModel(req.body);
    await newItem.save();
    res.send('works!');
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
router.get('/getjournal', async (req, res) => {
  try {
    const data = await JournalModel.find();
    console.log(data);

    res.send(data);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
router.get('/getsingleitem/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const data = await JournalModel.findById(id);
    console.log(data);

    res.send(data);
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
module.exports = router;
