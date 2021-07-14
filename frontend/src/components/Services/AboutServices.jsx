import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const AboutServices = ({ setView }) => (
  <div id="service-about-content">
    <Card variant="elevation" elevation={15}>
      <CardContent>
        <h1>Description about services.</h1>
        <p className="service-about-text" className="service-text">Something about the stuff that you do</p>
      </CardContent>
    </Card>
  </div>
);

export default AboutServices;