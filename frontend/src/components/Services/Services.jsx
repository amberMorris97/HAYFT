import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
import ReactSwipe from 'react-swipe';

const Services = () => {

  let reactSwipeEl;

  return (
    <div id="services-page" className="fullscreen">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div id="advisory" className="service openSans">
          <h1>Advisory</h1>
          <br />
          <span className="bold">We start where you are</span>
          <br />
          <p className="service-para">I can help you build or refresh your DEI strategy to create deeper meaning and greater impact.</p>
        </div>
        <div id="coaching" className="service openSans">
          <h1>Coaching</h1>
          <br />
          <span className="bold">Adaptive change is different</span>
          <br />
          <p className="service-para">I can help you explore your assumptions and experiences, in context, create new insights and grow.</p>
        </div>
        <div id="gathering" className="service openSans">
          <h1>Gathering</h1>
          <br />
          <span className="bold">Dialogue drives everything</span>
          <br />
          <p className="service-para">I can help you and your teams gather, with purpose, to activate new insights and build community.</p>
        </div>
      </ReactSwipe>
      <input type="image" src="https://img.icons8.com/ios/50/000000/chevron-right.png" name="saveForm" id="nextBtn" onClick={() => reactSwipeEl.next()}/>
      {/* <button className="next-service" onClick={() => reactSwipeEl.next()}>Next</button> */}
    </div>
  );
};

export default Services;