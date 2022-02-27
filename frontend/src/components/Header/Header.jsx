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
  useHistory,
  useLocation
} from 'react-router-dom';
import { Link as scrollTo } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Login from '../Admin/Login.jsx';
import User from '../../redux/actions/authActions';
import Logout from '../Admin/Logout.jsx';
import ProtectedRoute from '../ProtectedRoute.jsx';

const Header = ({ setView }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [anchor, toggleAnchor] = useState(false);
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.authReducer.user);
  const isAuth = useSelector(state => state.authReducer.isAuthenticated);

  const listStyle = {
    backgroundColor: 'rgba(18, 35, 46, 0.9)',
    width: 'auto',
    height: 'auto',
  }

  const handleChange = ({ target }) => {
    history.push(target.value)
  };

  const toggleDrawer = (anchor) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;

    toggleAnchor(!anchor);
  }

  const handleLogout = () => {
    const loadedUser = new User();
    dispatch(loadedUser.logout());
  };

  const navIdx = {
    '0': 'about',
    '1': 'services',
    '2': 'testimonials',
    '3': 'blog',
    '4': 'resources',
    '5': 'contact',
  }

  if (!isAuth) {
    return (
      <div id="header-container">
      <h4>
        <Link style={{ textDecoration: 'none', fontFamily: 'Lato' }} to="/"><h1>Jane Rosenzweig</h1></Link>
      </h4>
        <nav id="nav">
          <ul id="nav-links">
            <li>
              <Link style={{ textDecoration: 'none' }} to="/about">About Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">How I Can Help</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">Working With Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">Jane Says</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">Let&apos;s Connect</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/resources">{`Read & Think More`}</Link>
            </li>
          </ul>

          <MenuIcon onClick={toggleDrawer(anchor)}></MenuIcon>
            <Drawer open={anchor} onClose={toggleDrawer(anchor)}>
              <List style={listStyle}>
                {['About', 'How I Can Help', 'Working With Jane', 'Jane Says', 'Read & Think More', `Let's Connect`].map((text, index) => (
                 <Link style={{ textDecoration: 'none', color: '#EEFBFB' }} to={`/${navIdx[index]}`} key={text}>
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
        </nav>
    </div>
    );
  }

  return (
    <div id="header-container">
      <h4>
        <Link style={{ textDecoration: 'none' }} to="/">JANE ROSENZWEIG</Link>
      </h4>
        <nav id="nav">
          <ul id="nav-links">
          <li>
              <Link style={{ textDecoration: 'none' }} to="/about">About Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">How I Can Help</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">Working With Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">Jane Says</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">Let&apos;s Connect</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/resources">Read and Think More</Link>
            </li>
            <li><ProtectedRoute /></li>
            <li><Logout setView={setView} /></li>
          </ul>

          <MenuIcon onClick={toggleDrawer(anchor)}></MenuIcon>
            <Drawer open={anchor} onClose={toggleDrawer(anchor)}>
              <List style={listStyle}>
                {['About', 'How I Can Help', 'Working With Jane', 'Jane Says', `Let's Connect`, 'Read and Think More'].map((text, index) => (
                 <Link style={{ textDecoration: 'none', color: '#EEFBFB' }} to={`/${text.toLowerCase()}`} key={text}>
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                ))}
                <hr />
                {['ADD BLOG POST', 'LOGOUT'].map((text, index) => (
                  index === 0 ? <Link style={{ textDecoration: 'none', color: '#EEFBFB' }} to="/create-blog-post">Create Blog Post</Link> : <Logout setView={setView} />
                ))}
              </List>
            </Drawer>
        </nav>
    </div>
  );
};

export default Header;