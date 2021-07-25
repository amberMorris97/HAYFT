/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
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
      <h6>JANE ROSENZWEIG</h6>
      <Router>
        <nav id="nav">
          <ul id="nav-links">
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
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
      </Router>
    </div>
  );
};

export default Header;