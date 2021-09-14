import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from '../../redux/actions/authActions';

const Login = ({ setView }) => {
  const auth = useSelector(state => state.authReducer.isAuthenticated);

  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    error: '',
  });


  if (auth) {
    return (
      <h3>Hey Jane, you&apos;re already logged in.</h3>
    );
  }


  const handleChange = (e) => {
    const field = e.target.name;
    setLoginInfo({
      ...loginInfo,
      [field]: e.target.value,
      error: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User(null, null, loginInfo.email, loginInfo.password);
    const loggedIn = await dispatch(user.login());

    if (!loggedIn) {
      setLoginInfo({
        ...loginInfo,
        error: 'Invalid credentials',
      });
    } else {
      setView('home');
    }
  };


  return (
    <div id="login-container">
      <div id="fuck"></div>
      <form onSubmit={handleSubmit}>
        <TextField variant="standard" id="email" label="email" name="email" onChange={handleChange}>Email</TextField>
        <TextField variant="standard" id="password" label="password" name="password" type="password" onChange={handleChange}>Email</TextField>
      <Button type="submit">Login</Button>
      <br />
      <span style={{color: "red"}} id="phoneErr" className="error">{loginInfo.error}</span>
      </form>
    </div>
  );
};

export default Login;

// services when people click, want to give illustrations for the services
// lineage --> new section
// change email to janerosenzweig1