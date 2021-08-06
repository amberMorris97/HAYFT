const mongoose = require('mongoose');
const router = require('express').Router();
const Comments = require('../../../../database/models/comments');
const Replies = require('../../../../database/models/replies');
const toId = mongoose.Types.ObjectId;

router.get('/fetchReplies', async (req, res) => {
  const replies = await Replies.find({}).populate('replies');

  return replies ? res.send(replies) : res.status(400).send('There was an error fetching this thread.');
});

router.get('/fetchSingleReply', async (req, res) => {
  const { id } = req.query;

  const singleReply = await Replies.findOne({ _id:toId(`${id}`) }).populate('replies');

  return singleReply ? res.send(singleReply) : res.status(400).send('There was an error fetching this comment.');
});

router.post('/newCommentResponse', async (req, res) => {
  const reply = req.body;
  const { commentId } = reply;

  if (!commentId) return res.status(400).send('Unable to add comment to thread.');

  const newReply = new Replies(reply);
  const savedReply = await newReply.save();

  if (savedReply) {
    const commentToUpdate = await Comments.findOne({ _id:toId(`${commentId}`) });

    if (!commentToUpdate) return res.status(404).send('Comment not found.');

    commentToUpdate.replies.push(savedReply._id);

    const updatedComment = await commentToUpdate.save();

    return updatedComment ? res.send(updatedComment) : res.status(400).send('Could not send comment.');
  }
});

router.post('/newThreadResponse', async (req, res) => {
  const reply = req.body;
  const { replyId } = reply;

  if (!replyId) return res.status(400).send('Unable to add comment to thread');

  const newReply = new Replies(reply);
  const savedReply = await newReply.save();

  if (savedReply) {
    const replyToUpdate = await Replies.findOne({ _id:toId(`${replyId}`) });

    if (!replyToUpdate) return res.status(400).send('Comment not found');

    replyToUpdate.replies.push(savedReply._id);

    const updatedReply = await replyToUpdate.save();

    return updatedReply ? res.send(updatedReply) : res.status(400).send('Could not send comment');
  }
});

module.exports = router;