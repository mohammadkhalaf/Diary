const express = require('express');
const JournalModel = require('../models/Journal');
const router = express.Router();

router.post('/additem', async (req, res) => {
  try {
    const newItem = new JournalModel(req.body);
    await newItem.save();
    res.send('add intem');
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
router.get('/getjournal/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await JournalModel.find({ postedBy: req.params.id });

    res.send(data);
  } catch (err) {
    res.status(400).send({ msg: err });
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
router.put('/edit/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    let updated = await JournalModel.findById(id);
    if (updated) {
      updated = await JournalModel.findByIdAndUpdate(id, req.body);
    }
    console.log('ok');
  } catch (err) {
    console.log(err);
  }
});
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  console.log('you deelte this item' + id);
  try {
    let deleted = await JournalModel.findById(id);
    if (deleted) {
      updated = await JournalModel.findByIdAndDelete(id);
    }
    console.log('ok');
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
