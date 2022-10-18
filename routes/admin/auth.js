const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mongoose = require('mongoose');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser
} = require('./validators');
const User = require('../../repo/user');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        return res.send(signupTemplate({ req, errors }));
      }
      const { email, password, passwordConfirmation } = req.body;

      //saves users to db
      newUser.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
          res.send('Account created!!!');
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
    const { email } = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.send(signinTemplate({ errors }))
    } 
    res.send('You are signed in!!!');
  }
);

router.get('/signout', (req, res) => {
  res.send('You are logged out');
});

module.exports = router;
