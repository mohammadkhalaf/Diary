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
router.post('/edit', async (req, res) => {
  try {
    const update = await JournalModel.findById(req.body.id);
    if (updated) {
      console.log(true);
    }
    res.send('successfully');
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
