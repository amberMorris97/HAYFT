import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import moment from 'moment';

const SinglePost = () => {
  const params = useParams();
  const posts = useSelector(state => state.blogReducer.posts);
  let post;

  const id = params.id;
  post = posts.find(el => el._id === id);

  return (
    <div id="single-post-view" className="fullscreen">
      {!post && <h1>Fetching post....</h1>}
      <h1>{post.title}</h1>
      <img src={post.img} alt="post-photo" width="500px" height="350px"/>
      <span>By: {post.author}</span>
      <br />
      <span>{moment(post.createdAt).format('MMMM Do YYYY')}</span>
      <p>{post.post}</p>
    </div>
  )
}

export default SinglePost;