import React from 'react';
import { useSelector } from 'react-redux';
import Posts from '../Home/Blog/Posts.jsx';
import Footer from '../Footer/Footer.jsx';
import Resources from '../Footer/Resources.jsx';

const Blog = () => {
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  return (
    <div id="blog-posts-container">
      <h1>B L O G</h1>
      {fetchedPosts[0] && <Posts blogPosts={fetchedPosts} />}
      <Footer />
      <Resources />
    </div>
  );
}

export default Blog;