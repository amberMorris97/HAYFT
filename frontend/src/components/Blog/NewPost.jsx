import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addNewBlogPost } from '../../redux/actions/blogActions';
import SinglePost from './SinglePost.jsx';

const newPost = () => {
  const auth = useSelector(state => state.authReducer.isAuthenticated);

  const dispatch = useDispatch();
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    author: '',
    img: '',
    post: '',
  });

  if (!auth) {
    return (
      <h1>You do not have the correct credentials to access this page.</h1>
    );
  }

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
    <div id="create-post-container" className="fullscreen">
      <form id="blog-post-form" onSubmit={handleSubmit}>
        <TextField color="secondary" variant="outlined" id="title" label="Title" name="title" onChange={handleChange}></TextField>
        <TextField color="secondary" variant="outlined" id="author" label="Author" name="author" onChange={handleChange}></TextField>
        <TextField color="secondary" variant="outlined" id="img" label="Img Url" name="img" onChange={handleChange}></TextField>
        <TextField color="secondary" multiline variant="outlined" id="post" label="Post" name="post" onChange={handleChange}></TextField>
        <Button type="submit">Share</Button>
      </form>
    </div>
  );
}

export default newPost;