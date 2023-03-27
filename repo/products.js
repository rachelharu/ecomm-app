const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  type: String,
});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;