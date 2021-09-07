import React from 'react';
import EmailForm from './EmailForm.jsx';

const Footer = () => {

  const contactPhoto = './images/contactpic.png';

  return (
    <div id="footer" className="halfscreen">
      <EmailForm />
      <p style={{ color: '#EEFBFB', textAlign: 'center', fontFamily: 'Open Sans' }}>&quot;Be brave enough to start a conversation that matters.&quot; <br /> -Margaret Wheatley</p>
    </div>
  );
};

export default Footer;