const express = require('express');
const Product = require('../repo/products');
const productInfoIndexTemplate = require('../views/productinfo/index');


const router = express.Router();

router.get('/productinfo/:title', async (req, res) => {
    const title = req.params.title;
    const products = await Product.find({ title: title });
    //const title = category.charAt(0).toUpperCase() + category.slice(1);
    res.send(productInfoIndexTemplate({ products, title }));
});

module.exports = router;