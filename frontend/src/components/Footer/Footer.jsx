import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
import EmailForm from './EmailForm.jsx';
import Resources from './Resources.jsx';

const Footer = () => {

  return (
    <div id="footer" className="fullscreen">
      <div id="footer-form">
        <EmailForm />
      </div>
      <div id="footer-vl"></div>
      <div id="footer-resources">
        <Resources />
      </div>
    </div>
  );
};

export default Footer;