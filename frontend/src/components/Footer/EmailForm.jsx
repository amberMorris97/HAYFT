import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import sendEmail from './helpers/sendEmail';
import validateContactInfo from'./helpers/validateContactInfo';


const useStyles = makeStyles({
  'MuiTextField-root': {
    color: '#EEFBFB',
    backgroundColor: '#4DA8DA'
  }
})

const EmailForm = () => {
  const classes = useStyles();
  const [contactInfo, setContactInfo] = useState({
    name: '',
    nameError: '',
    company: '',
    email:'',
    emailError: '',
    phone: '',
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
      }
    } else {
      setContactInfo({
        ...contactInfo,
        ...errObj,
      });
    }
  };

  return (
    <div id="footer-form-container" className="form">
      <h1 id="contact-title">GET IN TOUCH</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div id="form-field">
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="name" id="name" label="Full Name" value={contactInfo.name} placeholder="Jane Rosenzweig" onChange={handleChange}></TextField> <br />
            <span style={{color: "red"}} id="nameErr" className="error">{contactInfo.nameError}</span>
          </div>
          <div>
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="company" id="company" label="Organization" value={contactInfo.company} placeholder="(Optional) Jane Rosenzweig DEI" onChange={handleChange} ></TextField> <br />
          </div>
          <div>
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="email" id="email" label="Email" value={contactInfo.email} placeholder="janerosenzweig1@gmail.com" onChange={handleChange}></TextField> <br />
            <span style={{color: "red"}} id="emailErr" className="error">{contactInfo.emailError}</span>
          </div>
          <div>
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="phone" id="phone" label="Phone" value={contactInfo.phone} placeholder="(Optional) (555) 555-5555" onChange={handleChange}></TextField> <br />
            <span style={{color: "red"}} id="phoneErr" className="error">{contactInfo.phoneError}</span>
          </div>
          <div>
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="subject" id="subject" label="Subject" value={contactInfo.subject} placeholder="Need Experienced DEI Specialist" onChange={handleChange}></TextField> <br />
            <span style={{color: "red"}} id="subjectErr" className="error">{contactInfo.subjectError}</span>
          </div>
          <div>
            <TextField InputLabelProps={{ className: 'inputLabel' }} InputProps={{ className: classes['MuiTextField-root'] }} color="secondary" variant="filled" type="text" name="message" id="message" label="Message" value={contactInfo.message} placeholder="Your message goes here..." onChange={handleChange} multiline maxRows={50}></TextField> <br />
            <span style={{color: "red"}} id="messageErr" className="error">{contactInfo.messageError}</span>
          </div>
          <br />
          <Button type="submit" name="form-submit-btn" disabled={false}>Send</Button>
        </form>

    </div>
  );
};

export default EmailForm;