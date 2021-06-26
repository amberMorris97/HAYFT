require('dotenv').config();
const express = require('express');
const path = require('path');
const { Post } = require('../database/schemas');
const register = require('./auth/register');
const jwt = require('jsonwebtoken');

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

app.post('/register', (req, res) => {
  const { name, username, email, password } = req.body;
  if (!name || !username || !email || !password) {
    return res.sendStatus(400);
  };

  register(name, username, email, password, (status, user) => {
    if (status === 400) res.sendStatus(400);

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

module.exports = app;