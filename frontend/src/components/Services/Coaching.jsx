import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const Coaching = ({ setView }) => (
  <div id="service-coaching-content">
    <Card variant="elevation" elevation={15}>
      <CardContent>
        <h1>Adaptive change is different.</h1>
        <p className="service-coaching-text" className="service-text">I can help you explore your assumptions and experiences, in context, create new insights and grow.</p>
      </CardContent>
    </Card>
  </div>
);

export default Coaching;