import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton.jsx';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
// const gray = './images/gray.jpg';

const About = () => {
  const cardStyle = {
    width: '30vw',
    height: '30vh',
  }
  return (
    <div id="about-container" >
      <h1 id="about-title" className="muli header text">ABOUT JANE</h1>
      <Card style={cardStyle} variant="elevation" elevation={15}></Card>
      <p className="openSans about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Link to="/contact"><PurpleButton text={'WORK WITH ME'} /></Link>
    </div>
  );
};

export default About;