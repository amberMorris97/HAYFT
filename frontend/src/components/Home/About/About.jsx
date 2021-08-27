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
    <div id="about-container">
      <h1 id="about-title" className="muli header text">ABOUT JANE</h1>
      <Card style={cardStyle} variant="elevation" elevation={15}></Card>
      <p className="openSans about-para">Jane has spent her career developing corporate DEI strategies anchored in social justice foundations. As the first Head of DEI (CDO) at W.L. Gore &amp; Associates (www.gore.com) Jane developed a philosophy and strategy that built on Gore’s humanistic values and innovative business model. Relying on culture change and social movement methodologies, Jane galvanized the involvement of thousands of Associates from around the world. Using curiosity and conversation, teams deepened their understanding of identity differences and committed to disrupting bias in day-to-day life. With a strong focus on systems and structures, Jane&apos;s approach is rooted in her belief that empathy and dialogue can solve most things.</p>
      <Link style={{ textDecoration: 'none' }} to="/contact"><PurpleButton text={'WORK WITH ME'} /></Link>
    </div>
  );
};

export default About;

