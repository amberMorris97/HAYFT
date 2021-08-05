import React from 'react';
import { useSelector } from 'react-redux';
import Posts from '../Home/Blog/Posts.jsx';

const Blog = () => {
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  return (
    <div id="blog-posts-container">
      <h1>B L O G</h1>
        {fetchedPosts[0] && <Posts blogPosts={fetchedPosts} />}
    </div>
  );
}

export default Blog;