const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/admin/auth');
const productsAdminRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });

app.use(authRouter);
app.use(productsAdminRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log('Listening');
});
