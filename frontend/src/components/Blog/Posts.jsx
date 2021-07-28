import React from 'react';
import moment from 'moment';
import Comments from './Comments.jsx';

const Posts = ({ blogPosts }) => {
  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <span>By: {post.author}</span> On:{" "}
          <span>{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
          <p>{post.post}</p>
          <Comments comments={post.comments} />
        </div>
      ))}
    </div>
  )
}

export default Posts;