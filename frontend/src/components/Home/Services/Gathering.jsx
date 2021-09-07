import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const gatheringPic = "./images/gathering-pic.png";

const Gathering = () => {
  // const [hovering, setHovering] = useState(false);
  return (
    <div className="service-card">
      <img src={gatheringPic} height="350" width="350" alt="gathering-pic" />
      <h1 className="services-card-title">Gathering</h1>
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <h3>Dialogue drives everything.</h3>
          <p id="service-gathering-text" className="service-text">I can help you and your teams gather, with purpose, to activate new insights and build community.</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default Gathering;