const express = require('express');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const Product = require('../../repo/products');
const productsNewTemplate = require('../../views/admin/products/new');
const { requireTitle, requirePrice } = require('./validators');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/admin/products', (req, res) => {});

router.get('/admin/products/new', (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post('/admin/products/new', upload.single('image'), [requireTitle, requirePrice],
  async (req, res) => {
    const errors = validationResult(req);
     
    if (!errors.isEmpty()) {
      return res.send(productsNewTemplate({ errors }))
    }

    const image = req.file.buffer.toString('base64');
    const { title, price } = req.body;

    const newProduct = new Product({
      title: title,
      price: price,
      image: image,
    }); 

    newProduct.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('success');
        res.send('submitted');
      }
    });
    
  });

module.exports = router;
