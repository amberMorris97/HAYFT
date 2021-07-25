const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  author: String,
  post: String,
  img: String,
},
  { timestamps: true },
);

const Blogs = mongoose.model('Blogs', BlogSchema);
module.exports = Blogs;