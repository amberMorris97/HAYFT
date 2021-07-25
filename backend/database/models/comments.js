const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentsSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Blogs' },
  author: String,
  comment: String,
  email: String,
  likes: Number,
  replies: [{ type: Schema.Types.ObjectId, ref: 'Replies' }],
},
  { timestamps: true },
);

const Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;
