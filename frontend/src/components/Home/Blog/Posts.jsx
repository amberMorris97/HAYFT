import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Posts = ({ blogPosts }) => {

  return (
    <div id="blog-post-preview">
      {blogPosts.map((post) => (
        <div id="post-preview" key={post._id}>
          <Link style={{ textDecoration: 'none' }} to={`/blog/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
          {post.post.split('.')[0].split('>')[1]}...<Link style={{ textDecoration: 'none' }}to={`/blog/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}

Posts.propTypes = {
  blogPosts: PropTypes.array,
}

export default Posts;