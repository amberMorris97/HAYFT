const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const session = require('express-session');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const { Post } = require('../database/schemas');
const { User } = require('../database/models/users');
const users = require('./routes/api/users')
const MongoStore = require('connect-mongo');
const app = express();

require('dotenv').config();
require('./config/passport');


app.use(express.json());
app.use(session({
  secret: process.env.JWT_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
    path: '/',
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    ttl: 1 * 1 * 60 * 60,
    autoRemove: 'native',
  }),
}));
app.use(require('./routes'));
app.use('/api/users', users);
// use users file to handle endpoints that start with / login

app.get('/end', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.clearCookie('Token');
    res.send('logged out');
  });
});

app.use(express.static(path.join(__dirname, '../../frontend/public')));

app.post('/newPost', async(req, res) => {
  const { title, userId, body } = req.body;
  const post = new Post({
    title,
    userId,
    body,
  });
  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (err) {
    console.log(err);
  }
});

app.get('/posts', async(req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

app.get('/user', async(req, res) => {
  // console.log(req.user)
  if (!req.user) return res.status(400).send('not logged in');
  const { id } = req.user
  const user = await User.findOne({_id:mongoose.Types.ObjectId(`${id}`)})
      .select('-password');
      res.send(user);
});

// app.post('/register', (req, res) => {
//   const registerStatus = {
//     'username_exists': 'username already exists',
//     'email_exists': 'email already exists',
//   };

//   const { name, username, email, password } = req.body;
//   if (!name || !username || !email || !password) return res.sendStatus(400);

//   register(name, username, email, password, (status, user) => {
//     if (status === 400) return res.status(400).send(user[registerStatus]);

//     jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: 3000 },
//       (err, token) => {
//         if (err) throw err;
//         const newUser = {
//           token,
//           id: user._id,
//           name: user.name,
//           username: user.username,
//         };
//         res.cookie('jwt', token, { expires: new Date(Date.now() + 10000), httpOnly: true });
//         res.send(newUser);
//       }
//     );
//   });
// });

// app.post('/login', (req, res) => {
//   const authStatus = {
//     'no_user_found': 'invalid username/email',
//     'bad_password': 'invalid credentials',
//   };

//   const { username, password } = req.body;
//   if (!username || !password) return res.sendStatus(400);
//   login(username, password, (status, user) => {
//     if (status === 400) return res.status(400).send(authStatus[user]);

//     jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: 30000 },
//       (err, token) => {
//         if (err) throw err;
//         const newUser = {
//           token,
//           id: user._id,
//           name: user.name,
//           username: user.username,
//         };
//         res.cookie('jwt', token, { expires: new Date(Date.now() + 10000), httpOnly: true });
//         res.send(newUser);
//       }
//     );
//   })

// })

module.exports = app;