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

  if (!isVisible) return ( <div ref={ref} className="halfscreen"></div> );

  return (
    <div ref={ref} id="services-container" className="halfscreen">
        <div id="service-cards-container">
          <Advising />
          <Coaching />
          <Gathering />
        </div>
      </div>
  );
}

export default Services;