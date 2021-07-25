const mongoose = require('mongoose');
const { Schema } = mongoose;

const RepliesSchema = new Schema({
  commentId: { type: Schema.Types.ObjectId, ref: 'Comments'},
  author: String,
  response: String,
  email: String,
  likes: Number,
  replies: [ this ],
},
  { timestamps: true },
);

const Replies = mongoose.model('Replies', RepliesSchema);
module.exports = Replies;