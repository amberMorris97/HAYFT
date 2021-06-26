import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  authReducer,
  errorReducer,
});

export default reducers;