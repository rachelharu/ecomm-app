require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/admin/auth')

const app = express();
//route handler request, response
// req receives info
// res sends info back
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });

app.use(authRouter);

app.listen(3000, () => {
  console.log('Listening');
});
