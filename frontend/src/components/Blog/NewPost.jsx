import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { addNewBlogPost } from '../../redux/actions/blogActions';
import SinglePost from './SinglePost.jsx';

const newPost = () => {
  const dispatch = useDispatch();
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    author: '',
    img: '',
    post: '',
  });

  const handleChange = (e) => {
    const field = e.target.name;
    setBlogInfo({
      ...blogInfo,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBlogPost(blogInfo));
    return (
      <SinglePost />
    );
  };

  return (
    <div id="single-post-view" className="fullscreen">
      <form id="blog-post-form" onSubmit={handleSubmit}>
        <TextField color="secondary" variant="outlined" id="title" label="title" name="title" onChange={handleChange}></TextField>
        <TextField color="secondary" variant="outlined" id="author" label="author" name="author" onChange={handleChange}></TextField>
        <TextField color="secondary" variant="outlined" id="img" label="img" name="img" onChange={handleChange}></TextField>
        <TextField color="secondary" variant="outlined" id="post" label="post" name="post" onChange={handleChange}></TextField>
        <button type="submit">Share</button>
      </form>
    </div>
  );
}

export default newPost;