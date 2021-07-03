import React, { useState } from 'react';
import Header from '../Header.jsx';

const Signup = ({ setView }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const firstLetter = e.target.name[0].toUpperCase();
    eval(`set${firstLetter}${e.target.name.slice(1)}`)(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const signingUp = { name, username, email, password };
    // signUpAction(signingUp)
  }

  return (
    <div id="signupView" className="pageView">
      <Header setView={setView} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" label="name" value={name} onChange={handleChange} className="formInput"></input>
        <input type="text" name="username" label="username" value={username} onChange={handleChange} className="formInput"></input>
        <input type="text" name="email" label="email" value={email} onChange={handleChange} className="formInput"></input>
        <input type="password" name="password" label="password" value={password} onChange={handleChange} className="formInput"></input>
        <button type="submit" name="signupBtn" label="signupBtn" className="formBtn" id="signupBtn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;