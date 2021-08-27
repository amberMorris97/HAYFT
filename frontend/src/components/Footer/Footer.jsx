import React from 'react';
import EmailForm from './EmailForm.jsx';

const Footer = () => {

  const contactPhoto = './images/contactpic.png';

  return (
    <div id="footer" className="halfscreen">
      <EmailForm />
      <img src={contactPhoto} width="250" height="250" alt="contact-graphic" />
    </div>
  );
};

export default Footer;