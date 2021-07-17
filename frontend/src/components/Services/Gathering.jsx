import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const Gathering = () => {
  // const [hovering, setHovering] = useState(false);
  return (
    <div id="service-gathering-content">
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <h1>Gathering</h1>
          <h3>Dialogue drives everything.</h3>
          <p id="service-gathering-text" className="service-text">I can help you and your teams gather, with purpose, to activate new insights and build community.</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default Gathering;