import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton.jsx';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
// const gray = './images/gray.jpg';

const About = () => {
  const imageStyle = {
    width: '25vw',
    height: '40vh',
  }
  const textStyle = {
    width: '75vw',
    height: '30vh',
    padding: '3em',
    backgroundColor: 'rgba(18, 35, 46, 0.5)',
    color: '#EEFBFB'
  }
  return (
    <div id="about-container">
      <h1 id="about-title" className="muli header text">ABOUT JANE</h1>
      <Card style={imageStyle} variant="elevation" elevation={24}>
          <img src="./images/jrselfie.jpeg" width="750" height="550" alt="photo-of-jane" />
      </Card>
      <Card style={textStyle} variant="elevation" elevation={2}>
        <p className="openSans about-para">Jane has spent her career developing corporate DEI strategies anchored in social justice foundations. As the first Head of DEI (CDO) at W.L. Gore &amp; Associates (www.gore.com) Jane developed a philosophy and strategy that built on Gore’s humanistic values and innovative business model. Relying on culture change and social movement methodologies, Jane galvanized the involvement of thousands of Associates from around the world. Using curiosity and conversation, teams deepened their understanding of identity differences and committed to disrupting bias in day-to-day life. With a strong focus on systems and structures, Jane&apos;s approach is rooted in her belief that empathy and dialogue can solve most things.</p>
      </Card>
      <Link style={{ textDecoration: 'none' }} to="/contact"><PurpleButton text={'WORK WITH ME'} /></Link>
    </div>
  );
};

export default About;

