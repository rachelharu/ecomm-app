const e = require('express');
const express = require('express');
const Carts = require('../repo/carts');

// const cartShowTemplate = require('../views/carts/show');

const router = express.Router();
let cart;


router.post('/cart/products', async (req, res) => {
  Carts.findById(req.session.cartId, (err, foundCart) => {
  if(err) {
    console.log(err) // This err is for the find by Id, not to the update function
  }
  if (foundCart) {
    console.log(foundCart)
    console.log(req.body.productId)
    let check = foundCart.items.map(item => item.id);
    console.log(check)
    if( check.includes(req.body.productId)) {
      console.log('MATCH FOUND')
    }
    Carts.updateOne( 
      { _id:foundCart._id }, {
      $push: {
        items: {
          _id: req.body.productId,
          quantity: 1,
        },
      },
    },(err, updatedCart) => {
       if(err){
         console.log(err)
       }
   } 
  );
  } else {
    if (!foundCart) {
      const newCart = new Carts({
        _id: req.session.cartId,
        items: [],
      });
      newCart.save();
    }
  } 
  });

  res.send('product added to cart!!');
});

module.exports = router;
