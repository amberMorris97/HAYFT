import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';

const Coaching = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div onMouseOut={() => setHovering(false)} onMouseOver={() => setHovering(true)} id="service-coaching-content">
      <Card variant="elevation" elevation={15}>
        <CardContent>
          {!hovering && <h1>Coaching</h1>}
          {hovering && <h1>Adaptive change is different.</h1>}
          {hovering && <p className="service-coaching-text" className="service-text">I can help you explore your assumptions and experiences, in context, create new insights and grow.</p>}
        </CardContent>
      </Card>
    </div>
  );
}
export default Coaching;