import React, { useRef } from 'react';
import { Slide } from '@material-ui/core';
import Advising from './Advising.jsx';
import Coaching from './Coaching.jsx';
import Gathering from './Gathering.jsx';
// import AboutServices from './AboutServices.jsx';
// import ServiceBar from './ServiceBar.jsx';
import nodeRef from './helpers/nodeRef';

const Services = () => {
  // const [view, setView] = useState('default');


  const ref = useRef();
  const isVisible = nodeRef(ref);

  if (!isVisible) return ( <div ref={ref} className="fullscreen"></div> );

  return (
    <div ref={ref} id="services-container" className="fullscreen">
      <Slide direction="down" in={isVisible} timeout={1500} mountOnEnter>
        <h1 className="services-title">S E R V I C E S</h1>
      </Slide>
      <Slide direction="down" in={isVisible} timeout={1500} mountOnEnter>
        <div id="service-cards-container">
          <Advising />
          <Coaching />
          <Gathering />
        </div>
      </Slide>
      </div>
  );
}

export default Services;