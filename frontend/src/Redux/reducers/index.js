import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import blogReducer from './blogReducer';

const reducers = combineReducers({
  authReducer,
  errorReducer,
  blogReducer,
});

export default reducers;