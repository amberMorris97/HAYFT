import React from 'react';
import { Card, CardContent, Slide } from '@material-ui/core';

const Advising = () => {

  return (
    <div id="service-advising-content">
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <h1>We start where you are.</h1>
          <p className="service-advising-text" className="service-text">I can help you build or refresh your DEI strategy to create deeper meaning and greater impact.</p>
        </CardContent>
      </Card>
    </div>
  );
;}

export default Advising;