const mongoose = require('mongoose');
const router = require('express').Router();
const Blogs = require('../../../database/models/blogs');
const db = require('../../../database/index');

router.post('/newBlog', async (req, res) => {
  const data = req.body;
  const newPost = new Blogs(data);

  const saved = await newPost.save();

  if (saved) return res.send(saved)

  return res.status(400).send('Unable to post at this time.');
});

router.put('/deleteBlog/:id', async (req, res) => {
  const { id } = req.params;

  const deleted = await Blogs.deleteOne({ _id:mongoose.Types.ObjectId(`${id}`) });

  if (deleted) return res.send(deleted);

  return res.status(400).send('Post cannot be deleted at this time.');
});

module.exports = router;