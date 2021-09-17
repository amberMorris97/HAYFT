import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Posts from './Posts.jsx';

const Blog = () => {
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  const posts = fetchedPosts.slice(0, 3);

  return (
    <div id="blog-container" className="halfscreen">
      <h1>
        <Link style={{ textDecoration: 'none' }} to="/blog">Jane Says</Link>
      </h1>
        {fetchedPosts[0] && <Posts blogPosts={posts} />}
    </div>
  );
}

export default Blog;