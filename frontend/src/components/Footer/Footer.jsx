import React from 'react';
import EmailForm from './EmailForm.jsx';

const Footer = () => {

  const contactPhoto = './images/contactpic.png';

  return (
    <div id="footer" className="halfscreen">
      <EmailForm />
      <p>&quot;Be brave enough to start a conversation that matters.&quot;<br /><span>
        -Margaret Wheatley</span></p>
    </div>
  );
};

export default Footer;