import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';

const sendEmail = require('../../helpers/sendEmail');

const EmailForm = () => {
  const [success, setSuccess] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    company: '',
    email:'',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const field = e.target.name;
    setContactInfo({
      ...contactInfo,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const successMsg = await sendEmail(contactInfo);
    if (successMsg.status === 200) {
      setContactInfo({
        name: '',
        company: '',
        email:'',
        phone: '',
        subject: '',
        message: '',
      });
    }
  }

  return (
    <div id="email-form" className="form">
      <h1 id="contact-title">Get In Touch!</h1>
      <div id="contact-form">
        <form onSubmit={handleSubmit}>
          Name: <input type="text" name="name" label="form-name" value={contactInfo.name} placeholder="John Doe" onChange={handleChange}></input>
          {' '}
          Company: <input type="text" name="company" label="form-company" value={contactInfo.company} placeholder="John Doe Worldwide" onChange={handleChange}></input>
          <br />
          Email: <input type="text" name="email" label="form-email" value={contactInfo.email} placeholder="johndoe@email.com" onChange={handleChange}></input>
          {' '}
          Phone: <input type="text" name="phone" label="form-phone" value={contactInfo.phone} placeholder="(Optional)555-555-5555" onChange={handleChange}></input>
          <br />
          Subject: <input type="text" name="subject" label="form-subject" value={contactInfo.subject} placeholder="Need Experienced DEI Specialist" onChange={handleChange}></input>
          <br />
          Message: <textarea type="text" name="message" label="form-message" value={contactInfo.message} placeholder="johndoe@email.com" onChange={handleChange} width="500" height="500"></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;