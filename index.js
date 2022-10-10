require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const md5 = require('md5');
//creates variable app for express
const app = express();
//route handler request, response
// req receives info
// res sends info back
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: [process.env.KEY],
  })
);


mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true });


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  passwordConfirmation: String,
});


const User = new mongoose.model('User', userSchema);

app.get('/signup', (req, res) => {
  res.send(`
    <div>
    Your id is: ${req.session.userId}
        <form method="POST">
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <input name="passwordConfirmation" placeholder="confirm password" />
          <button>Sign Up</button>
        </form>
    </div>
  `);
});

app.post('/signup', async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: md5(req.body.password)
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
  newUser.save( (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
      res.send('Account created!!!');
    }
  });
});

app.get('/signin', (req, res) => {
  res.send(`
  <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <button>Sign In</button>
      </form>
  </div>
  `);
});

app.post('/signin', async (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password);

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send('Email or Password does not exist')
    } else { 
      if (foundUser) {
        
      if(foundUser.password === password) {
        res.send('You are signed in!!!');
        }
      }
    }
  });
});


app.get('/signout', (req, res) => {
  res.send('You are logged out');
});



app.listen(3000, () => {
  console.log('Listening');
});
