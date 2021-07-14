import React, { useState, useRef } from 'react';
import ReactSwipe from 'react-swipe';
import { Slide } from '@material-ui/core';
import Advising from './Advising.jsx';
import Coaching from './Coaching.jsx';
import Gathering from './Gathering.jsx';
import AboutServices from './AboutServices.jsx';
import ServiceBar from './ServiceBar.jsx';
import nodeRef from './helpers/nodeRef';

const Services = () => {
  const [view, setView] = useState('default');


  const ref = useRef();
  const isVisible = nodeRef(ref);

  if (!isVisible) return ( <div ref={ref} className="fullscreen"></div> );

  switch(view) {
    case 'advising': {
      return (
        <div id="services" className="fullscreen">
          <div id="service-content">
          <button onClick={() => setView('default')} className="services-title">S E R V I C E S</button>
            <ServiceBar setView={setView} />
            <Advising setView={setView} />
          </div>
        </div>
      );
    }
    case 'coaching': {
      return (
        <div id="services" className="fullscreen">
          <div id="service-content">
          <button onClick={() => setView('default')} className="services-title">S E R V I C E S</button>
            <ServiceBar setView={setView} />
            <Coaching />
          </div>
        </div>
      );
    }
    case 'gathering': {
      return (
        <div id="services" className="fullscreen">
          <div id="service-content">
          <button onClick={() => setView('default')} className="services-title">S E R V I C E S</button>
            <ServiceBar setView={setView} />
            <Gathering />
          </div>
        </div>
      );
    }
    default:
      return (
        <div ref={ref} id="services" className="fullscreen">
          <div id="service-content">
            <Slide direction="down" in={isVisible} timeout={1500} mountOnEnter>
                <button onClick={() => setView('default')} className="services-title">S E R V I C E S</button>
            </Slide>
            <Slide direction="down" in={isVisible} timeout={1500} mountOnEnter>
              <div id="service-slide-div">
                <ServiceBar setView={setView} />
                <AboutServices />
              </div>
            </Slide>
            </div>
        </div>
      );
  }
};

export default Services;