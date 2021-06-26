import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUser from '../redux/actions/authActions';
import Login from './User/Login.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);



  return (
    <div>
      <h1>App</h1>
      <Login />
    </div>
  );
};

export default App;