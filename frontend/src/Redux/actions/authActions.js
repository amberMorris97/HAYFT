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

class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  };

  signUp = (user) => async (dispatch, getState) => {
    const newUser = await axios.post('/api/users/register', user);
    if (newUser.data.success) dispatch({ type: REGISTER_SUCCESS, payload: newUser.data.success });
    else dispatch({ type: REGISTER_FAIL, payload: newUser.data.error });
  };

  login = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const info = {
      username: this.username,
      password: this.password,
    };
    const user = await axios.post('/api/users/login', info);
    if (user.data.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: user.data.success });
      dispatch({ type: USER_LOADED , payload: user.data });
    }
    else {
      dispatch({ type: LOGIN_FAIL });
      return user.data.errors;
    }
  };

  load = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const user = await axios.get('/api/users/current');
    if (user.data.success) dispatch({ type: USER_LOADED, payload: user.data.success });
    else dispatch({ type: AUTH_ERROR, payload: user.data.error });
  };

  logout = () => async (dispatch, getState) => {
    const loggedOut = await axios.get('/end');
    if (loggedOut.data.success) dispatch({ type: LOGOUT_SUCCESS });
    else dispatch({ type: 'LOGOUT_ERROR', payload: loggedOut.data.error });
  };

  update = (id) => async (dispatch, getState) => {
    const updatedUser = await axios.get(`/api/users/updateUser/${id}`);
    if (updatedUser.data.success) dispatch({ type: 'USER_UPDATED', payload: updatedUser.data.success });
    else dispatch({ type: 'USER_CANT_UPDATE', payload: updatedUser.data.errors });
  }

  delete = (id) => async (dispatch, getState) => {
    const deleteUser = await axios.put(`/api/users/deleteUser/${id}`);
    if (deleteUser.data.success) dispatch({ type: 'USER_DELETED' });
    else dispatch({ type: 'USER_CANT_DELETE', payload: deleteUser.data.error });
  };
};

export default User;