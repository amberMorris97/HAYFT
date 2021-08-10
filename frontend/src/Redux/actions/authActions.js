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

  login = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const info = {
      email: this.email,
      password: this.password,
    };

    try {
      const { data } = await axios.post('/api/users/login', info);
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      return data;
    } catch(err) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  load = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    const user = await axios.get('/api/users/current');
    if (user.data.email) dispatch({ type: USER_LOADED, payload: user.data });
    else dispatch({ type: AUTH_ERROR, payload: user.data });
  };

  logout = () => async (dispatch, getState) => {
    const loggedOut = await axios.get('/end');
    if (loggedOut.data) dispatch({ type: LOGOUT_SUCCESS });
    else dispatch({ type: 'LOGOUT_ERROR', payload: loggedOut.data });
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