import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import Link from 'react-router-dom/Link';

const Resources = () => {

  const handleEmailClick = () => {
    window.open('mailto:janerosenzweig1@gmail.com');
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#EEFBFB', height: "25vh" }} id="resources">
      <div className="fn-list" id="fn1-resources">
        <h3>Resources</h3>
        <ul>
          <li>COMING</li>
          <li>SOON</li>
        </ul>
      </div>
      <div className="fn-list" id="fn1-resources">
        <h3>Quick Links</h3>
        <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">Services</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">Blog</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
            </li>
        </ul>
      </div>
      <div id="icons">
        <div id="linkedIn-icon">
          <a style={{ color: '#fff' }} href="https://www.linkedin.com/in/jane-rosenzweig-19749b/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div id="email-icon" onClick={handleEmailClick}>
          <EmailIcon fontSize="large" />
        </div>
        <div id="phone-icon">
          <PhoneIcon fontSize="large" />
          <h6 style={{ fontSize: '15px' }}>302.985.7065</h6>
        </div>
      </div>
    </div>
  );
};

export default Resources;