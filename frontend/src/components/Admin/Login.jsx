import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from '../../redux/actions/authActions';
import Modal from '../Modal';

const Login = () => {
  const buttonStyle = { color: '#EEFBFB' };

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    error: '',
  });

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
    }
  };

  return (
    <div id="login-container">
      <button style={buttonStyle} onClick={() => setIsOpen(true)}>LOGIN</button>
      <Modal id="login-modal" open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <TextField variant="standard" id="email" label="email" name="email" onChange={handleChange}>Email</TextField>
          <TextField variant="standard" id="password" label="password" name="password" type="password" onChange={handleChange}>Email</TextField>
        <Button type="submit">Login</Button>
        <br />
        <span style={{color: "red"}} id="phoneErr" className="error">{loginInfo.error}</span>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
