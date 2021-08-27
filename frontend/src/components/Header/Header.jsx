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
import Modal from '../Modal';

const logo = './images/jrlogo1.png';


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

  if (!isAuth) {
    return (
      <div id="header-container">
      <h4>
        <Link style={{ textDecoration: 'none' }} to="/"><img src={logo} height="150" width="150" /></Link>
      </h4>
        <nav id="nav">
          <ul id="nav-links">
            <li>
              <Link style={{ textDecoration: 'none' }} to="/about">ABOUT</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">SERVICES</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">TESTIMONIALS</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">BLOG</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">CONTACT</Link>
            </li>
          </ul>

          <MenuIcon onClick={toggleDrawer(anchor)}></MenuIcon>
            <Drawer open={anchor} onClose={toggleDrawer(anchor)}>
              <List style={listStyle}>
                {['ABOUT', 'SERVICES', 'TESTIMONIALS', 'BLOG', 'CONTACT'].map((text, index) => (
                 <Link style={{ textDecoration: 'none', color: '#EEFBFB' }} to={`/${text}`} key={text}>
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
              <Link style={{ textDecoration: 'none' }} to="/about">ABOUT</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">SERVICES</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">TESTIMONIALS</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">BLOG</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">CONTACT</Link>
            </li>
            <li><ProtectedRoute /></li>
            <li><Logout setView={setView} /></li>
          </ul>

          <MenuIcon onClick={toggleDrawer(anchor)}></MenuIcon>
            <Drawer open={anchor} onClose={toggleDrawer(anchor)}>
              <List style={listStyle}>
                {['ABOUT', 'SERVICES', 'TESTIMONIALS', 'BLOG', 'CONTACT'].map((text, index) => (
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