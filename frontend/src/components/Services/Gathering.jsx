import React, { useState } from 'react';
import { Card, CardContent } from '@material-ui/core';

const Gathering = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <div onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)} id="service-gathering-content">
      <Card variant="elevation" elevation={15}>
        <CardContent>
          {!hovering && <h1>Gathering</h1>}
          {hovering && <h1>Dialogue drives everything.</h1>}
          {hovering && <p id="service-gathering-text" className="service-text">I can help you and your teams gather, with purpose, to activate new insights and build community.</p>}
        </CardContent>
      </Card>
    </div>
  );
};
export default Gathering;