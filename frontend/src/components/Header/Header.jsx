import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './User/Login.jsx';
import Signup from './User/Signup.jsx';
import User from '../../redux/actions/authActions';

const Header = ({ setView }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);

  const handleClick = (e => setView(e.target.name));

  const handleLogout = () => {
    const loadedUser = new User();
    dispatch(loadedUser.logout());
  };

  return (
    <div id="header" className="headerDiv">
      <h4 className="headerEl">Idk What This App Is Yet</h4>
      <nav id="navHeader">
        <button label="homeBtn" name="Home" className="headerBtns" id="homeBtn" onClick={handleClick}>Home</button>
        {!user ? <button label="loginBtn" name="Login" className="headerBtns" id="loginBtn" onClick={handleClick}>Login</button> : <button label="logoutBtn" name="logout" id="logoutBtn" onClick={handleLogout}>Logout</button>}
        {!user ? <button label="signupBtn" name="Signup" className="headerBtns" id="signupBtn" onClick={handleClick}>Signup</button> : <></>}
      </nav>
    </div>
  );
};

export default Header;