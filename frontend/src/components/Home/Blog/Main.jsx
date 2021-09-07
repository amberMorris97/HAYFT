import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../../../redux/actions/blogActions';
import Posts from './Posts.jsx';

const Blog = ({ fullscreen }) => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  // useEffect(() => {
  //   dispatch(fetchBlogPosts());
  // }, []);

  const posts = fetchedPosts.slice(0, 3);

  return (
    <div id="blog-container" className="halfscreen">
      <h1>
        <Link style={{ textDecoration: 'none' }} to="/blog">Blog</Link>
      </h1>
        {fetchedPosts[0] && <Posts blogPosts={posts} />}
    </div>
  );
}

export default Blog;