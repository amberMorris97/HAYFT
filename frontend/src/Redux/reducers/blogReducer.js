import { GET_POSTS } from '../types';

const initialState = {
  posts: [],
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS: {
      return {
        posts: action.payload,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default blogReducer;