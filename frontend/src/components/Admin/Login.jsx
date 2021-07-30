import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import User from '../../redux/actions/authActions';
import Modal from '../Modal';

const Login = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const field = e.target.name;
    setLoginInfo({
      ...loginInfo,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = new User(null, null, loginInfo.email, loginInfo.password);
    dispatch(user.login());
  };

  return (
    <div id="login-container">
      <button onClick={() => setIsOpen(true)}>Login</button>
      <Modal id="login-modal" open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit}>
          <TextField variant="standard" id="email" label="email" name="email" onChange={handleChange}>Email</TextField>
          <TextField variant="standard" id="password" label="password" name="password" type="password" onChange={handleChange}>Email</TextField>
        <Button type="submit">Login</Button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
