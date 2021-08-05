import React from 'react';
import EmailForm from './EmailForm.jsx';
import Resources from './Resources.jsx';

const Footer = () => {

  return (
    <div id="footer" className="halfscreen">
      <EmailForm />
      <div id="footer-vl"></div>
      <Resources />
    </div>
  );
};

export default Footer;