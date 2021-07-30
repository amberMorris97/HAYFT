import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Posts = ({ blogPosts }) => {

  return (
    <div id="blog-post-preview">
      {blogPosts.map((post) => (
        <div key={post._id}>
          <Link to={`/blog/${post._id}`}>
            <h1>{post.title}</h1>
          </Link>
          <span>By: {post.author}</span>
          <br />
          <span>{moment(post.createdAt).format('MMMM Do YYYY')}</span>
          <p><em>{post.post.split('.')[0]}</em></p>
        </div>
      ))}
    </div>
  )
}

export default Posts;