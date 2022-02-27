import React, { useEffect } from 'react';
import Footer from './Footer/Footer.jsx';
import Resources from './Footer/Resources.jsx';
import servicesText from './Home/Services/helpers/servicesInfo';

const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',
  fontFamily: 'Lato',
}

const elStyle = {
  padding: '2em',
  textAlign: 'center'
}

const ServicesMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={mainStyle} id="services-main">
      <h1>How I Can Help</h1>
      {servicesText.map((service) => (
      <div style={elStyle} key={service.title.toLowerCase()} id="service-main-el">
        <h3>{service.title}</h3>
        <span>{service.subtitle}</span>
        <p>{service.text}</p>
      </div>
      ))}
      <Footer />
      <Resources />
    </div>
  );
 }

export default ServicesMain;