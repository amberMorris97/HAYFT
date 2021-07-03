import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import User from '../../../redux/actions/authActions';
// import { LOGOUT_SUCCESS }  from '../../redux/types';

const Logout = ({ setView }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const user = new User();
    dispatch(user.logout());
    setView('home');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;