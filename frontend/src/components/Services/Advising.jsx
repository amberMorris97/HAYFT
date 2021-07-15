import React, { useState } from 'react';
import { Card, CardContent, Slide } from '@material-ui/core';

const Advising = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div onMouseOut={() => setHovering(false)} onMouseOver={() => setHovering(true)} id="service-advising-content">
      <Card variant="elevation" elevation={15}>
        <CardContent>
          {!hovering && <h1>Advisory</h1>}
          {hovering && <h1>We start where you are.</h1>}
          {hovering && <p className="service-advising-text" className="service-text">I can help you build or refresh your DEI strategy to create deeper meaning and greater impact.</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Advising;