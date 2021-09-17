import React, { useEffect } from 'react';
import EmailForm from './Footer/EmailForm.jsx';
import Resources from './Footer/Resources.jsx';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div id="contact-main" className="halfscreen">
    <EmailForm />
    <Resources />
  </div>
  );
}
export default Contact;