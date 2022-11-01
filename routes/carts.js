const express = require('express');
const Carts = require('../repo/carts');

const router = express.Router();

router.post('/cart/products', async (req, res) => {
try {
  let cart = await Carts.findById(req.session.cartId);
  // Check if cart exists
  if (!cart) {
    // Create new cart
    cart = await Carts.create({
      _id: req.session.cartId,
      items: [],
    });
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

  // Save updated cart
  await cart.save();

  res.status(200).send('product added to cart!!');
} catch (err) {
  res.status(500).send('there was an error');
}
});

module.exports = router;
