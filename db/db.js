const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectCB = async () => {
  try {
      await mongoose.connect(process.env.MONGODB_URI);
  
  } catch (err) {
 
  }
};
module.exports = connectCB;
