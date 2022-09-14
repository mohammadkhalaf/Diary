const express = require('express');
const dotenv = require('dotenv').config();
const connectCB = require('./db/db');
const journal = require('./routes/journal');
const users = require('./routes/user');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

app.use('/api/journal', journal);
app.use('/api/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

connectCB();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
