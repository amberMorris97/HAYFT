import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DescriptionCarousel from './DescriptionCarousel.jsx';
// import AboutServices from './AboutServices.jsx';
// import ServiceBar from './ServiceBar.jsx';
import servicesText from './helpers/servicesInfo';
import Descriptions from './Descriptions.jsx';
import MobileDescriptions from './MobileDescriptions.jsx';

const Services = () => {
  const [tab, setTab] = useState('advising');

  return (
    <div id="services-container" className="fullscreen">
      <h1>How I Can Help</h1>
        <Descriptions descriptionList={servicesText} tab={tab} />
        <MobileDescriptions descriptionList={servicesText} tab={tab} />
        <DescriptionCarousel setTab={(service) => setTab(service)} descriptionList={servicesText} tab={tab}/>


        <Link style={{ textDecoration: 'none' }} to="/services"><Button>Learn More</Button></Link>

      </div>
  );
}

export default Services;