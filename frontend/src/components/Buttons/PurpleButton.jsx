import React from 'react';
import Button from '@material-ui/core/Button';

const PurpleButton = ({ text }) => {

  return (
    <div className="main-button">
      <Button
        focusRipple
        key="learn-more"
        className="learn-more-btn"
        label="learn-more"
      >{text}</Button>
    </div>
  );
};

export default PurpleButton;