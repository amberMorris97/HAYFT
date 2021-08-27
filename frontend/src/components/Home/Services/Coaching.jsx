import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const coachingPic = './images/coaching-pic.png';

const Coaching = () => {
  // const [hovering, setHovering] = useState(false);

  return (
    <div className="service-card" id="service-coaching-card">
      <img src={coachingPic} width="400" height="400" alt="coaching-graphic" />
      <h1 className="services-card-title">COACHING</h1>
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <h3>Adaptive change is different.</h3>
          <p id="service-coaching-text" className="service-text">I can help you explore your assumptions and experiences, in context, create new insights and grow.</p>
        </CardContent>
      </Card>
    </div>
  );
}
export default Coaching;