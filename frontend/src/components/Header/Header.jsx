/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
    <div id="header-container">
      <h4>J A N E  R O S E N Z W E I G | DEI Strategist</h4>
      <nav id="nav">
        <ul id="nav-links">
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TESTIMONIALS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>

        <select>
          <option>About</option>
          <option>Services</option>
          <option>Testimonials</option>
          <option>Blog</option>
          <option>Contact</option>
        </select>
      </nav>
    </div>
  );
};

export default Header;