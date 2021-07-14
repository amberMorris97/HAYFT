import React from 'react';
import Button from '@material-ui/core/Button';

const LearnMoreBtn = () => {

  return (
    <div id="learnMoreBtnDiv" className="btnDiv">
      <Button
        focusRipple
        key="learn-more"
        className="learn-more-btn"
        label="learn-more"
      >Learn More</Button>
    </div>
  );
};

export default LearnMoreBtn;