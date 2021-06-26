const axios = require('axios');
import { returnErrors, clearErrors } from './errorActions';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../types';

  const loadUser = (user) => (dispatch, getState) => {
  // User Loading
  const token = getState().authReducer.token;
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  axios.get('/user', config)
    .then((res) => {
      console.log(res)
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
}

export default loadUser;