const mongoose = require('mongoose');
const router = require('express').Router();
const Blogs = require('../../../database/models/blogs');
const db = require('../../../database/index');

router.get('/posts', async (req, res) => {
  const blogPosts = await Blogs.find({});

  if (blogPosts) return res.send(blogPosts);

  return res.status(400).send('No blog posts found.');
});

router.post('/newPost', async (req, res) => {
  const data = req.body;
  const newPost = new Blogs(data);

  const saved = await newPost.save();

  if (saved) return res.send(saved)

  return res.status(400).send('Unable to post at this time.');
});

router.put('/deletePost/:id', async (req, res) => {
  const { id } = req.params;

  const deleted = await Blogs.deleteOne({ _id:mongoose.Types.ObjectId(`${id}`) });

  if (deleted) return res.send(deleted);

  return res.status(400).send('Post cannot be deleted at this time.');
});

router.patch('/updatePost/:id', async (req, res) => {
  const { id } = req.params;
  const { title, post, img } = req.body;

  const exisitingBlogPost = await Blogs.findOne({ _id:mongoose.Types.ObjectId(`${id}`) });

  if (!exisitingBlogPost) return res.status(400).send('Post does not exist');

  if (title) exisitingBlogPost.title = title;
  if (post) exisitingBlogPost.post = post;
  if (img) exisitingBlogPost.img = img;

  const updatedBlog = await exisitingBlogPost.save();

  if (updatedBlog) return res.send('Post updated successfully.');
  return res.status(400).send('Post cannot be updated at this time.');
});

module.exports = router;