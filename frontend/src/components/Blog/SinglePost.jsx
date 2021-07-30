import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { fetchSinglePost } from '../../redux/actions/blogActions';

const SinglePost = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const post = useSelector(state => state.blogReducer.singlePost);

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    dispatch(fetchSinglePost(id))
  }, []);

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