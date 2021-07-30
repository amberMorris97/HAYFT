import { GET_POSTS, SINGLE_POST } from '../types';

const initialState = {
  posts: [],
  singlePost: [],
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case SINGLE_POST: {
      return {
        ...state,
        singlePost: action.payload,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default blogReducer;