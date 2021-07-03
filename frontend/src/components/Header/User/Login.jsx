const axios = require('axios');
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../Header.jsx';
// import { USER_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from '../../redux/types';
// import loadUser from '../../redux/actions/authActions';

const Login = ({ setView }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    if (e.target.name === 'username') setUsername(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // dispatch({ type: USER_LOADING });
    const user = await axios.post('/api/users/login', {
      username,
      password,
    });
    // if (!user) dispatch({ type: LOGIN_FAIL });

    // login(user);
    // dispatch({ type: LOGIN_SUCCESS, payload: user.data });
  }

  return (
    <div id="loginView" className="pageView">
      <Header setView={setView} />
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" onChange={(e) => handleInput(e)} value={username}className="formInput" label="loginUsernameInput"></input>
        <input name="password" type="text" onChange={(e) => handleInput(e)} value={password}className="formInput" label="loginPasswordInput"></input>
        <button name="loginBtn" id="loginBtn" className="formBtn" label="loginBtn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;