const db  = require('./index.js');
const { Post } = require('./schemas.js');

const samplePosts = [
  {
    title: 'Test Entry #1',
    body: 'Hello world! Testing...'
  }
]

const insertSampleBlogs = function() {
  Post.create(samplePosts)
    .then(() => {
      db.close()
      console.log('letting you know this happened')
    });
};

insertSampleBlogs();