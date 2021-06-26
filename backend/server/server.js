require('dotenv').config();
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const { Post, User } = require('../database/schemas');
const register = require('./auth/register');
const login = require('./auth/login');
const auth = require('./auth/middleware');

const app = express();
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(express.json());


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

app.get('/user', auth, async(req, res) => {
  const { id } = req.user.id;
    const user = await User.findById(id)
      .select('-password');
      console.log(user)
      res.send(user);
})

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
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        const newUser = {
          token,
          id: user._id,
          name: user.name,
          username: user.username,
        };
        res.send(newUser);
      }
    );
  });

});

app.post('/login', (req, res) => {
  const authStatus = {
    'no_user_found': 'invalid username/email',
    'bad_password': 'invalid credentials',
  };

  const { username, password } = req.body;
  if (!username || !password) return res.sendStatus(400);
  login(username, password, (status, user) => {
    if (status === 400) return res.status(400).send(authStatus[user]);

    jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        const newUser = {
          token,
          id: user._id,
          name: user.name,
          username: user.username,
        };
        res.send(newUser);
      }
    );
  })

})

module.exports = app;