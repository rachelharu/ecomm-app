const express = require('express');
const Carts = require('../repo/carts');

// const cartShowTemplate = require('../views/carts/show');

const router = express.Router();
let cart;

router.post('/cart/products', async (req, res) => {
    
Carts.findById(req.session.cartId, (err, foundCart) => {
  if(foundCart){
    console.log(foundCart);
  } else {
    if(!foundCart){
      const newCart = new Carts({
        _id: req.session.cartId,
        items: []
      });
      newCart.save();
      console.log(newCart);
    }
  }
})

  

  res.send('product added to cart!!');
});

module.exports = router;
