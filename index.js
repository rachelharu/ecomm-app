require('dotenv').config();
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/admin/auth');
const productsAdminRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const categoryRouter = require('./routes/categories');
const infoRouter = require('./routes/productinfo');
const session = require('express-session');

const app = express();

app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));




//cloud DB
mongoose.connect(
  'mongodb+srv://admin-angela:' +
    process.env.PASSWORD +
    '@cluster0.syiim.mongodb.net/userDB',
  { useNewUrlParser: true }
);


app.use(authRouter);
app.use(productsAdminRouter);
app.use(productsRouter);
app.use(cartsRouter);
app.use(categoryRouter);
app.use(infoRouter);



const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT);
});
