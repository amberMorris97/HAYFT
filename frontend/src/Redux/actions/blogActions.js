import axios from 'axios';
import { GET_POSTS } from '../types';

const fetchBlogPosts = () => async (dispatch, getState) => {
  const blogPosts = await axios.get('/api/blog/fetchPosts');
  console.log(blogPosts)
  if (blogPosts) dispatch({ type: GET_POSTS, payload: blogPosts.data });
};

export default fetchBlogPosts;