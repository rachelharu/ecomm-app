const express = require('express');
const Carts = require('../repo/carts');

// const cartShowTemplate = require('../views/carts/show');

const router = express.Router();
let cart;

router.post('/cart/products', async (req, res) => {
    if (!req.session.cartId) {
      cart =  await Carts.create({ items: [] });
      req.session.cartId = cart.id;
      } else {
        cart = await Carts.find({ _id: req.session.cartId });
        console.log(req.session.cartId);
      }
      console.log(cart);

      // const existingItem = cart.items.find(
      //   (item) => item.id === req.body.productId
      // );
      // if (existingItem) {
      //   existingItem.quantity++;
      // } else {
      //   cart.items.push({ _id: req.body.productId, quantity: 1 });
      // }
      // await Carts.updateOne(cart.id, {
      //   items: cart.items,
      // });
    
 res.send('product added to cart!!');
});

module.exports = router;
