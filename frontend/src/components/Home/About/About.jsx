import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about-container">
      <h1>About Jane</h1>
      <img src="./images/jrselfie.jpeg" width="500" height="500" alt="photo-of-jane" />
      <p style={{ color: 'black', width: '75%' }} className="openSans about-para">Jane has spent her career developing corporate DEI strategies anchored in social justice foundations. As the first Head of DEI (CDO) at W.L. Gore &amp; Associates (www.gore.com) Jane developed a philosophy and strategy that built on Gore’s humanistic values and innovative business model. Relying on culture change and social movement methodologies, Jane galvanized the involvement of thousands of Associates from around the world. Using curiosity and conversation, teams deepened their understanding of identity differences and committed to disrupting bias in day-to-day life. With a strong focus on systems and structures, Jane&apos;s approach is rooted in her belief that empathy and dialogue can solve most things.</p>
      <Link style={{ textDecoration: 'none' }} to="/contact"><Button>Let&apos;s talk!</Button></Link>
    </div>
  );
};

export default About;

