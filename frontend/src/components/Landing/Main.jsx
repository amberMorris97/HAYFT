import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Header from '../Header/Header.jsx';

const Main = () => {

  return (
    <div id="landing-content">
      <Header />
      <div id="landingPage" className="fullscreen">
        <h1 id="landingTitle" className="muli">Diversity
            <br />
            Equity
            <br />
            Inclusion
        </h1>
        <Card className="card-img" id="landing-image" variant="elevation" elevation={15}>
          <CardMedia
            className="lake"
            style={{ height: 700 }}
            image='./images/lake.jpg'
            title="lake photo"
            />
        </Card>
        <div id="landing-text">
          <p className="landing-para">together, we can create a cycle of <strong>inquiry</strong>, <strong>reflection</strong> and <strong>being</strong> that will help you grow and your teams thrive.</p>
          <br />
          <LearnMoreBtn />
        </div>
      </div>
    </div>
  );
};

export default Main;