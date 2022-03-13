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
  try {
    const data = await JournalModel.find();
    const journals = data.filter((obj) => obj.postedBy === id);
    // console.log(journals.length);
    res.send(journals);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get('/detailpage/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await JournalModel.findById(id);
    if (!data) {
      return res.status(404).send('Item can not be found');
    }
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
