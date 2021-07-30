import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../../../redux/actions/blogActions';
import Posts from './Posts.jsx';

const Blog = ({ fullscreen }) => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  return (
    <div id="blog-container" className={fullscreen}>
      <h1>Blog</h1>
      {fetchedPosts[0] && <Posts blogPosts={fetchedPosts} />}
    </div>
  );
}

export default Blog;