import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Posts from '../Home/Blog/Posts.jsx';
import Footer from '../Footer/Footer.jsx';
import Resources from '../Footer/Resources.jsx';

const Blog = () => {
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="blog-posts-container">
      <h1>Blog Posts</h1>
      {fetchedPosts[0] && <Posts blogPosts={fetchedPosts} />}
      <Footer />
      <Resources />
    </div>
  );
}

export default Blog;