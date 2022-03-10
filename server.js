const express = require('express');
const dotenv = require('dotenv').config();
const connectCB = require('./db/db');
const journal = require('./routes/journal');
const users = require('./routes/user');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('hello');
});
app.use('/api/journal', journal);
app.use('/api/users', users);
connectCB();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
