import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Posts = ({ blogPosts }) => {

  return (
    <div id="blog-post-preview">
      {blogPosts.map((post) => (
        <div id="post-preview" key={post._id}>
          <Link style={{ textDecoration: 'none' }} to={`/blog/${post._id}`}>
            <h2>{post.title}</h2>
          </Link>
          {post.img && <img src={post.img} alt="blog-thumbnail" height="150" width="200" /> }
          <br />
          <span>By: {post.author}</span>
          <br />
          <span>{moment(post.createdAt).format('MMMM Do YYYY')}</span>
          <p><em>{post.post.split('.')[0]}</em>...<Link style={{ textDecoration: 'none', fontSize: 'inherit', fontStyle: 'italic' }} to={`/blog/${post._id}`}>Read More</Link></p>
        </div>
      ))}
    </div>
  )
}

export default Posts;