const express = require('express');
const dotenv = require('dotenv').config();
const connectCB = require('./db/db');
const journal = require('./routes/journal');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/api/journal', journal);
connectCB();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
