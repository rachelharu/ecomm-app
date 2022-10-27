const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [],
});

const Carts = new mongoose.model('Carts', cartSchema);

module.exports = Carts;
