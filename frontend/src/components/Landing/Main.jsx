import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
const Main = () => {

  return (
    <div id="landingPage" className="fullscreen">
      <h1 id="landingTitle" className="marcellus">Diversity
          <br />
          Equity
          <br />
          Inclusion
      </h1>
      <p className="openSans" id="landingText">together, we can create a cycle of <strong>inquiry</strong><strong>reflection</strong> and <strong>being</strong> that will help you grow and your teams thrive.</p>
      <div id="landing-btn">
        <LearnMoreBtn />
      </div>
    </div>
  );
};

export default Main;