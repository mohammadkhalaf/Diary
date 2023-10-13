const express = require('express');
const dotenv = require('dotenv')
const connectCB = require('./db/db');
const journal = require('./routes/journal');
const users = require('./routes/user');
const path = require('path');
const notFoundMiddleWare = require('./not-found');
dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/journals', journal);
app.use('/api/users', users);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}
app.use(notFoundMiddleWare);
connectCB();
app.listen(PORT);
