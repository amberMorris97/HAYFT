import React from 'react';
import Button from '@material-ui/core/Button';

const ServiceBar = () => {
  return (
    <div id="service-bar" className="service-content">
      <Button
        focusRipple
        key="advising"
        className="service-button"
        label="advising"
      >Advising</Button>
      {' '}
      <Button
        focusRipple
        key="coaching"
        className="service-button"
        label="coaching"
        >Coaching</Button>
      {' '}
      <Button
        focusRipple
        key="gathering"
        className="service-button"
        label="gathering"
      >Gathering</Button>
    </div>
  );
};

export default ServiceBar;