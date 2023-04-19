const express = require('express');
const Product = require('../repo/products');
const categoryIndexTemplate = require('../views/categories/index');


const router = express.Router();

router.get('/categories/:category', async (req, res) => {
    const category = req.params.category;
    const products = await Product.find({ type: category });
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    res.send(categoryIndexTemplate({ products, title }));
});

module.exports = router;