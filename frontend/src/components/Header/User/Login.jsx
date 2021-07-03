const axios = require('axios');
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import User from '../../../redux/actions/authActions';
import Header from '../Header.jsx';

const Login = ({ setView }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInput = (e) => {
    const letter = e.target.name[0].toUpperCase();
    eval(`set${letter}${e.target.name.slice(1)}`)(e.target.value);
    eval(`set${letter}${e.target.name.slice(1)}Error`)('');
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setMessageError('');
    if (!username) {
      return setUsernameError('Please enter username');
    }
    if (!password) {
      return setPasswordError('Please enter password');
    }
    const user = new User(null, username, null, password);
    const message = await dispatch(user.login());
    if (message.success) {
      return setView('home');
    } else {
      return setView(message.errors);
    }
  }

  return (
    <div id="loginView" className="pageView">
      <Header setView={setView} />
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" onChange={handleInput} value={username}className="formInput" label="loginUsernameInput"></input>
        {usernameError}
        <input name="password" type="text" onChange={handleInput} value={password}className="formInput" label="loginPasswordInput"></input>
        {passwordError}
        <button name="loginBtn" id="loginBtn" className="formBtn" label="loginBtn" type="submit">Login</button>
        <br />
        {messageError}
      </form>
    </div>
  );
};

export default Login;