const express = require('express');
const Carts = require('../repo/carts');
const Product = require('../repo/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();
let cart;

router.post('/cart/products', async (req, res) => {
  try {
    if (!req.session.cartId) {
      cart = await Carts.create({ items: [] });
      req.session.cartId = cart.id;
    } else {
      cart = await Carts.findById({ _id: req.session.cartId });
      console.log(req.session.cartId);
    }
    console.log(cart);

    // Check if product is present
    const productIndex = cart.items.findIndex(
      (item) => item._id === req.body.productId
    );
    if (productIndex === -1) {
      // Create new product
      cart.items.push({
        _id: req.body.productId,
        quantity: 1,
      });
    } else {
      // Update existing product
      cart.items[productIndex].quantity += 1;
    }
    console.log(cart);
    // Save updated cart
    await cart.save();

    res.redirect('/cart');
    // res.status(200).send('product added to cart!!');
  } catch (err) {
    console.log(err);
    res.status(500).send('there was an error');
  }
});

router.get('/cart', async (req, res) => {
  if (!req.session.cartId) {
    return res.redirect('/');
  }
  const cart = await Carts.findById(req.session.cartId);

  for (let item of cart.items) {
    const currentProduct = await Product.findById(item._id);

    item.product = currentProduct;
  }

  res.send(cartShowTemplate({ items: cart.items }));
});

router.post('/cart/products/delete', async (req, res) => {
  const { itemId } = req.body;
  const cart = await Carts.findById(req.session.cartId);

  const items = cart.items.filter((item) => item._id !== itemId);
  await Carts.updateOne(cart, { items });
  console.log(cart);
  res.redirect('/cart');
});

module.exports = router;
