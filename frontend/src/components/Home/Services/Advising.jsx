import React, {/* useState */} from 'react';
import { Card, CardContent } from '@material-ui/core';

const advisingPic = './images/advising-pic.png';

const Advising = () => {
  // const [hovering, setHovering] = useState(false);

  return (
    <div className="service-card">
       <img src={advisingPic} height="350" width="350" alt="advising-graphic" />
      <h1 className="services-card-title">Advisory</h1>
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <h3>We start where you are.</h3>


          <p id="service-advising-text" className="service-text">I can help you build or refresh your DEI strategy to create deeper meaning and greater impact.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Advising;