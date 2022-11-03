const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  // _id: String,
  items: [
    { quantity: Number, _id: String }
  ]
});

const Carts = new mongoose.model('Carts', cartSchema);

module.exports = Carts;
