import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../../../redux/actions/blogActions';
import Posts from './Posts.jsx';

const Blog = ({ fullscreen }) => {
  const dispatch = useDispatch();
  const blogList = useRef(0);
  const fetchedPosts = useSelector(state => state.blogReducer.posts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  const posts = fetchedPosts.slice(blogList.current, blogList.current + 4);

  // if next is clicked, ref.current += 4;

  return (
    <div id="blog-container" className="halfscreen">
      <h1>Blog</h1>
      {fetchedPosts[0] && <Posts blogPosts={posts} />}

    </div>
  );
}

export default Blog;