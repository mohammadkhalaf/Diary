const express = require('express');
const JournalModel = require('../models/Journal');
const router = express.Router();
router.get('/',(req,res)=>{
  res.send('sdfsdf')
})

router.post('/additem', async (req, res) => {
  try {
    const newItem = new JournalModel(req.body);
    await newItem.save();
    res.send('item added');
  } catch (err) {
    res.status(400).send({ msg: err });
  }
});
router.get('/getjournal/:id', async (req, res) => {
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
  try {
    let updated = await JournalModel.findById(id);
    if (updated) {
      updated = await JournalModel.findByIdAndUpdate(id, req.body);
    }
    res.status(200).json({ msg: 'You have successfully edited' });
  } catch (err) {
    res.status(400).json({msg:'Bad request. Item not updated'})
  }
});
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    let deleted = await JournalModel.findById(id);
    if (deleted) {
      updated = await JournalModel.findByIdAndDelete(id);
    }
    res.status(200).json({ msg: 'You have deleted an article' });
  } catch (err) {
    res.status(400).json({msg:'Bad request. Item not deleted'})
  }
});
module.exports = router;
