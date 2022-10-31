const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
 
  items: [
    { quantity: Number, _id: String }
  ]
});

const Carts = new mongoose.model('Carts', cartSchema);

module.exports = Carts;
