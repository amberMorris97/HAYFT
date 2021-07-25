const mongoose = require('mongoose');
const router = require('express').Router();
const Comments = require('../../../../database/models/comments');
const Blogs = require('../../../../database/models/blogs');
const toId = mongoose.Types.ObjectId;

router.get('/fetchComments', async (req, res) => {
  const comments = await Comments.find({}).populate('replies');

  return comments ? res.send(comments) : res.status(400).send('Unable to fetch comments at this time.');
});

router.get('/fetchSingleComment', async (req, res) => {
  const { id } = req.query;

  const singleComment = await Comments.findOne({ _id:mongoose.Types.ObjectId(`${id}`) }).populate('replies');

  return singleComment ? res.send(singleComment) : res.status(400).send('There was an error fetching this comment.')
});

router.post('/newComment', async (req, res) => {
  const comment = req.body;
  const { postId } = comment;

  if (!postId) return res.status(400).send('Unable to add comment. Please try again.');

  const newComment = new Comments(comment);
  const savedComment = await newComment.save();

  if (savedComment) {
    const postToUpdate = await Blogs.findOne({ _id:toId(`${postId}`) });

    if (!postToUpdate) return res.status(404).send('Post not found.');

    postToUpdate.comments.push(savedComment._id);

    const updatedPost = await postToUpdate.save();

    return updatedPost ? res.send(updatedPost) : res.status(400).send('Could not send comment.');
  }

});

module.exports = router;