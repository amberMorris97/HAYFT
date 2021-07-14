import React from 'react';
import Button from '@material-ui/core/Button';

const ServiceBar = ({ setView }) => {
  const handleClick = e => setView(e.target.innerText.toLowerCase());
  return (
    <div id="service-bar" className="service-content">
      <Button
        focusRipple
        key="advising"
        className="service-button"
        label="advising"
        onClick={handleClick}
      >Advising</Button>
      {' '}
      <Button
        focusRipple
        key="coaching"
        className="service-button"
        label="coaching"
        onClick={handleClick}
        >Coaching</Button>
      {' '}
      <Button
        focusRipple
        key="gathering"
        className="service-button"
        label="gathering"
        onClick={handleClick}
      >Gathering</Button>
    </div>
  );
};

export default ServiceBar;