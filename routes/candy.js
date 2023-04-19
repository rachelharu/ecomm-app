const express = require('express');
const Product = require('../repo/products');
const categoryIndexTemplate = require('../views/categories/candy');


const router = express.Router();

router.get('/categories/candy', async (req, res) => {
    const products = await Product.find({ type: 'candy' });
    res.send(categoryIndexTemplate({ products }));
});

module.exports = router;