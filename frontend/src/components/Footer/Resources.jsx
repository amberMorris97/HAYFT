import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Link from 'react-router-dom/Link';

const Resources = () => {

  const handleEmailClick = () => {
    window.open('mailto:janerosenzweig1@gmail.com');
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#EEFBFB', height: "25vh" }} id="resources">
      <div className="fn-list" id="fn1-resources">
        <h3>Quick Links</h3>
        <ul>
        <li>
              <Link style={{ textDecoration: 'none' }} to="/about">About Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/services">How I Can Help</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/testimonials">Working With Jane</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/blog">Jane Says</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/contact">Let&apos;s Connect</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/resources">{`Read & Think More`}</Link>
            </li>
        </ul>
      </div>
      <div id="icons">
        <div id="linkedIn-icon">
          <a style={{ color: 'white' }} href="https://www.linkedin.com/in/jane-rosenzweig-19749b/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div id="email-icon" onClick={handleEmailClick}>
          <EmailIcon fontSize="large" />
        </div>
        <div id="phone-icon">
          <a style={{ color: 'white' }} href="tel:3029857065">
          <PhoneIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;