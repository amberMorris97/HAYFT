import React, { useState, useEffect } from 'react';
import EmailForm from './EmailForm.jsx';
import Resources from './Resources.jsx';

const Footer = () => {

  return (
    <div id="footer" className="halfscreen">
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