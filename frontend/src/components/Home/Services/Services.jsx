import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Advising from './Advising.jsx';
import Coaching from './Coaching.jsx';
import Gathering from './Gathering.jsx';
// import AboutServices from './AboutServices.jsx';
// import ServiceBar from './ServiceBar.jsx';
import PurpleButton from '../../Buttons/PurpleButton.jsx';

const Services = () => {
  // const [view, setView] = useState('default');

  return (
    <div id="services-container">
      <h1>S E R V I C E S</h1>
        <div id="service-cards-container">
          <Advising />
          <Coaching />
          <Gathering />
        </div>
        <Link to="/services"><PurpleButton text={'LEARN MORE'} /></Link>
      </div>
  );
}

export default Services;