const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const mongoDBSession = require('connect-mongodb-session')(session);
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require('./validators');
const User = require('../../repo/user');

const router = express.Router();

const store = new mongoDBSession({
  uri: 'mongodb://localhost:27017/userDB',
  collection: 'sessions',
});

router.use(
  session({
    secret: 'some key',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new User({
        email: email,
        password: hash,
      });
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.send(signupTemplate({ req, errors }));
      }

      //saves users to db
      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          req.session.isAuth = true;
          res.redirect('/admin/products');
        }
      });
    });
  }
);

router.get('/signin', (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.send(signinTemplate({ errors }));
    }
    req.session.isAuth = true;
    res.redirect('/admin/products');
  }
);

router.get('/signout', (req, res) => {
  req.session.isAuth = null;
  res.send('You are logged out');
});

module.exports = router;
