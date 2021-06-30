const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const session = require('express-session');
const mongoose = require('mongoose');
const { Post } = require('../database/schemas');
const { User } = require('../database/models/users');
const register = require('./auth/register');
const login = require('./auth/login');
const auth = require('./auth/middleware');
const users = require('./routes/api/users')
const checkCookies = require('./auth/checkCookies');
const MongoStore = require('connect-mongo');
const app = express();

require('dotenv').config();
require('./config/passport');


app.use(express.json());
app.use(require('./routes'));
app.use('/api/users', users);
// use users file to handle endpoints that start with / login


app.use(session({
  secret: process.env.JWT_SECRET,
  saveUninitialized: true,
  resave: true,
  getToken: (req) => {
    checkCookies(req)
      .then((user) => {
        if (user.username) req.user = user;
      })
  },
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/hayft',
    ttl: 1 * 1 * 60 * 60,
    autoRemove: 'native',
  }),
}));

app.get('/', (req, res, next) => {
  next();
});

app.get('/end', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.send('Session is destroyed');
  });
});

// app.use((req, res, next) => {
//   console.log(req.session)
//   console.log('===')
//   console.log(req.user)
//   next()
// })

// app.get('/',
//   expressJwt({
//     secret: process.env.JWT_SECRET,
//     algorithms: ['HS256'],
//     getToken: (req) => {
//       checkCookies(req)
//         .then((user) => {
//           if (user.username) req.session.user = user;
//           console.log(req.session, 'session')
//         });
//     },
//     credentialsRequired: false,
//   })
// );

app.use(express.static(path.join(__dirname, '../../frontend/public')));
// app.use('/', auth, (req, res, next) => {
//   // when page is loaded (?) check if token
//   // if no token, just return out or something
//   // if there is a token
//     // check for cookie
//       // no cookie ? create new session
//       // cookie ? look up session
//         // if session active , continue
//         // if session expired , logout
// });



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
  console.log(req.user, 'REQ.USER')
  const { id } = req.user
  const user = await User.findOne({_id:mongoose.Types.ObjectId(`${id}`)})
      .select('-password');
      res.send(user);
});

app.post('/register', (req, res) => {
  const registerStatus = {
    'username_exists': 'username already exists',
    'email_exists': 'email already exists',
  };

  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) return res.sendStatus(400);

  register(name, username, email, password, (status, user) => {
    if (status === 400) return res.status(400).send(user[registerStatus]);

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 3000 },
      (err, token) => {
        if (err) throw err;
        const newUser = {
          token,
          id: user._id,
          name: user.name,
          username: user.username,
        };
        res.cookie('jwt', token, { expires: new Date(Date.now() + 10000), httpOnly: true });
        res.send(newUser);
      }
    );
  });
});

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