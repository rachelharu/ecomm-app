const express = require('express');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const Product = require('../../repo/products');
const productsNewTemplate = require('../../views/admin/products/new');
const productsIndexTemplate = require('../../views/admin/products/index');
const productsEditTemplate = require('../../views/admin/products/edit');
const { requireTitle, requirePrice } = require('./validators');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect('/signup');
  }
};

const handleErrors = (templateFunc, dataCb) => {
  return async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let data = {};
      if (dataCb) {
        data = await dataCb(req);
      }
      return res.send(templateFunc({ errors, ...data }));
    }
    next();
  };
};

router.get('/admin/products', isAuth, async (req, res) => {
  const products = await Product.find();
  res.send(productsIndexTemplate({ products }));
});

router.get('/admin/products/new', isAuth, (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post(
  '/admin/products/new',
  isAuth,
  upload.single('image'),
  [requireTitle, requirePrice],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(productsNewTemplate({ errors }));
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
        res.redirect('/admin/products');
      }
    });
  }
);

router.get('/admin/products/:id/edit', isAuth, async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.send('Product not found');
  }
  res.send(productsEditTemplate({ product }));
});

router.post(
  '/admin/products/:id/edit',
  isAuth,
  upload.single('image'),
  [requireTitle, requirePrice],
  handleErrors(productsEditTemplate, async (req) => {
    const product = await Product.findById(req.params.id);
    return { product };
  }),
  async (req, res) => {
    const changes = req.body;
    if (req.file) {
      changes.image = req.file.buffer.toString('base64');
    }
    try {
      await Product.updateOne({ _id: req.params.id }, changes);
    } catch (err) {
      return res.send('Could not find item');
    }
    res.redirect('/admin/products');
  }
);

router.post('/admin/products/:id/delete', isAuth, async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });

  res.redirect('/admin/products');
});

module.exports = router;
