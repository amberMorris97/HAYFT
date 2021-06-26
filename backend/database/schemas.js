const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
  title: String,
  userId: Number,
  body: String,
  likes: {type: Number, default: 0},
  views: {type: Number, default: 0}
},
  {
    timestamps: true
  }
);

const commentsSchema = new mongoose.Schema({
  userId: Number,
  postId: Number,
  body: String,
  likes: { type: Number, default: 0 }
},
  {
    timestamps: true
  }
);

const commentThreadSchema = new mongoose.Schema({
  commentId: Number,
  postId: Number,
  userId: Number,
  body: String,
  likes: { type: Number, default: 0 }
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  },
);

const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentsSchema);
const Thread = mongoose.model('Thread', commentThreadSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Post, Comment, Thread, User }