import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBlogPosts from '../../redux/actions/blogActions';
import Posts from './Posts.jsx';

const Blog = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {fetchedPosts[0] && <Posts blogPosts={fetchedPosts} />}
    </div>
  );
}

export default Blog;