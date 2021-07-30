import axios from 'axios';
import { GET_POSTS, SINGLE_POST, ADD_POST } from '../types';

export const fetchBlogPosts = () => async (dispatch, getState) => {
  const blogPosts = await axios.get('/api/blog/fetchPosts');
  if (blogPosts) return dispatch({ type: GET_POSTS, payload: blogPosts.data });
};

export const fetchSinglePost = (id) => async (dispatch, getState) => {
  const singlePost = await axios.get(`/api/blog/fetchSinglePost?id=${id}`);
  if (singlePost) return dispatch({ type: SINGLE_POST, payload: singlePost.data });
};

export const addNewBlogPost = (data) => async (dispatch, getState) => {
  const newBlogPost = await axios.post('/api/blog/newPost', data);
  if (newBlogPost) return fetchSinglePost(newBlogPost._id);
};