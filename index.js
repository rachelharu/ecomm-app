const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');


const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });


app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
  console.log('Listening');
});
