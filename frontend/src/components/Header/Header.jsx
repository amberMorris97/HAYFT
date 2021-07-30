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
import Login from '../Admin/Login.jsx';
import User from '../../redux/actions/authActions';
import Logout from '../Admin/Logout.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx';


const Header = ({ setView }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);
  const isAuth = useSelector(state => state.authReducer.isAuthenticated);

  const handleClick = (e => setView(e.target.name));

  const handleLogout = () => {
    const loadedUser = new User();
    dispatch(loadedUser.logout());
  };

  if (!isAuth) {
    return (
      <div id="header-container">
      <h6>
        <Link to="/">JANE ROSENZWEIG</Link>
      </h6>
        <nav id="nav">
          <ul id="nav-links">
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>CONTACT</li>
            <li><Login /></li>
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
  }

  return (
    <div id="header-container">
      <h6>
        <Link to="/">JANE ROSENZWEIG</Link>
      </h6>
        <nav id="nav">
          <ul id="nav-links">
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TESTIMONIALS</li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>CONTACT</li>
            <li><ProtectedRoute /></li>
            <li><Logout setView={setView} /></li>
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