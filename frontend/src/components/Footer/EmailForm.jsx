import React, { useState, useEffect } from 'react';

const sendEmail = require('./helpers/sendEmail');
const validateContactInfo = require('./helpers/validateContactInfo');

const EmailForm = () => {
  const [success, setSuccess] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    nameError: '',
    company: '',
    companyError: '',
    email:'',
    emailError: '',
    phone: '',
    phoneError: '',
    subject: '',
    subjectError: '',
    message: '',
    messageError: '',
  });

  const handleChange = (e) => {
    const field = e.target.name;
    setContactInfo({
      ...contactInfo,
      [field]: e.target.value,
      [`${field}Error`]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendButton = e.target.childNodes[7];
    const errObj = validateContactInfo(contactInfo);
    if (Object.keys(errObj).length === 0) {
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
        sendButton.disabled = true;
        sendButton.innerText = 'Thanks for reaching out! We will get back to you soon.';
      };
    } else {
      setContactInfo({
        ...contactInfo,
        ...errObj,
      });
    }
  };

  return (
    <div id="email-form-div" className="form">
      <h1 id="contact-title">Get In Touch!</h1>
      <div id="contact-form-div">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div id="contact-name">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" label="form-name" value={contactInfo.name} placeholder="John Doe" onChange={handleChange}></input>
            <span id="nameErr" className="error">{contactInfo.nameError}</span>
          </div>
          <div id="contact-company">
            <label htmlFor="company">Company: </label>
            <input type="text" name="company" id="company" label="form-company" value={contactInfo.company} placeholder="John Doe Worldwide" onChange={handleChange}></input>
            <span id="companyErr" className="error">{contactInfo.companyError}</span>
          </div>
          <div id="contact-email">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" label="form-email" value={contactInfo.email} placeholder="johndoe@email.com" onChange={handleChange}></input>
            <span id="emailErr" className="error">{contactInfo.emailError}</span>
          </div>
          <div id="contact-phone">
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" id="phone" label="form-phone" value={contactInfo.phone} placeholder="(Optional) (555) 555-5555" onChange={handleChange}></input>
            <span id="phoneErr" className="error">{contactInfo.phoneError}</span>
          </div>
          <div id="contact-subject">
            <label htmlFor="subject">Subject: </label>
            <input type="text" name="subject" id="subject" label="form-subject" value={contactInfo.subject} placeholder="Need Experienced DEI Specialist" onChange={handleChange}></input>
            <span id="subjectErr" className="error">{contactInfo.subjectError}</span>
          </div>
          <div id="contact-message">
            <label htmlFor="message">Message: </label>
            <textarea type="text" name="message" id="message" label="form-message" value={contactInfo.message} placeholder="Your message goes here..." onChange={handleChange} width="750" height="500"></textarea>
            <span id="messageErr" className="error">{contactInfo.messageError}</span>
          </div>
          <br />
          <button type="submit" name="form-submit-btn" disabled={false}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;