import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    if (e.target.name === 'username') setUsername(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(username, password);
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