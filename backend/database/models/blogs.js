const mongoose = require('mongoose');
const db = require('../index');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  author: String,
  post: String,
  img: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
},
  { timestamps: true },
);

const Blogs = db.model('Blogs', BlogSchema);
module.exports = Blogs;