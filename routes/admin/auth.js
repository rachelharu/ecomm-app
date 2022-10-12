const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mongoose = require('mongoose');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');


const router = express.Router();

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  passwordConfirmation: String,
});

const User = new mongoose.model('User', userSchema);

router.get('/signup', (req, res) => {
  res.send(signupTemplate());
});

router.post('/signup', async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    const newUser = new User({
      email: req.body.email,
      password: hash,
    });
    const { email, password, passwordConfirmation } = req.body;
    //checks for existing user
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.send('Email in use');
    }
    // checks password match
    if (password !== passwordConfirmation) {
      return res.send('passwords must match');
    }
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
});

router.get('/signin', (req, res) => {
  res.send(signinTemplate());
});

router.post('/signin', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send('Email or Password does not exist');
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (result === true) {
            res.send('You are signed in!!!');
          } else {
            if (!foundUser) {
              console.log('error');
            }
          }
        });
      }
    }
  });
});

router.get('/signout', (req, res) => {
  res.send('You are logged out');
});

module.exports = router;