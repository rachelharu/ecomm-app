const express = require('express');
const Product = require('../repo/products');
const productsIndexTemplate = require('../views/products/index');


const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(productsIndexTemplate({ products }));
});

module.exports = router;
