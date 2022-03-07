const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectCB = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URI);
    console.log('is connected');
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectCB;
