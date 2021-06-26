const axios = require('axios');
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { USER_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from '../../redux/types';
import loadUser from '../../redux/actions/authActions';

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    if (e.target.name === 'username') setUsername(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({ type: USER_LOADING });
    const user = await axios.post('/login', {
      username,
      password,
    });
    if (!user) dispatch({ type: LOGIN_FAIL });

    login(user);
    dispatch({ type: LOGIN_SUCCESS, payload: user.data });
  }

  return (
    <div id="login" className="loginScreen">
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" onChange={(e) => handleInput(e)}></input>
        <input name="password" type="text" onChange={(e) => handleInput(e)}></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;