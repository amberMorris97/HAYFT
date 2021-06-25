const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Post } = require('../database/schemas');

const app = express();
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/newPost', async (req, res) => {
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

app.get('/posts', async (req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;