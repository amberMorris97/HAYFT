import React, { useState, useEffect } from 'react';
import LearnMoreBtn from '../Buttons/LearnMore.jsx';
import ReactSwipe from 'react-swipe';
const square = './images/gray.jpg';
const christian = './images/ChristianLanger.jpeg';

const Testimonials = () => {

  let reactSwipeEl;

  return (
    <div id="testimonials-page" className="fullscreen">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div id="terri-kelly" className="testimonial openSans">
          <img src={square} alt="terri-kelly-photo" width="250" height="250" />
          <p className="testimonial-para">"Working with Jane is a very rewarding experience. She is incredibly insightful and takes the time to truly understand the culture of the organization as an essential component of her work. Jane connects easily with others and
          builds trust throughout the process."</p>
          <span>- Teri Kelly, former CEO, W.L. Gore &amp; Associates</span>
        </div>
        <div id="christian-langer" className="testimonial openSans">
          <img src={christian} alt="christian-langer-photo" width="250" height="250" />
          <p className="service-para">“A workplace can be virtuous and fun or it can be treacherous and a grind. Jane
          helps you realize that leading through diversity, equity, inclusion and belonging
          can translate into both engaged employees &amp; higher profits.”</p>
          <span>- Christian Langer, Founder &amp; MD KORE | PUTTING PURPOSE AT THE KORE</span>
        </div>
        <div id="liz-david" className="testimonial openSans">
          <img src={square} alt="liz-david-photo" width="250" height="250" />
          <p className="service-para">"It’s rare that you come across a Diversity and Inclusion leader like Jane. I have had the pleasure of working with Jane for the last 10 years at W.L. Gore &amp; Associates, collaborating on several project teams. I was always particularly impressed by Jane’s ability to handle the toughest situations – from a difficult stakeholder to a frustrated employee – effortlessly. This is a finely honed skill of hers that she uses naturally in her engagements. No matter how tense a conversation, Jane made sure that everyone left feeling heard and respected. Jane is a true asset to any organization focused on delivering diversity and inclusion solutions and earns my highest recommendation."</p>
          <span>- Liz David, Manager at PWC</span>
        </div>
        <div id="shaila-kapur" className="testimonial openSans">
          <img src={square} alt="shaila-kapur-photo" width="250" height="250" />
          <p className="service-para">"We worked with Jane recently when she volunteered to facilitate a DE&I discussion for a not for profit girls' school, Serviam Academy. Jane was a pleasure to work with from the beginning, bringing knowledge, enthusiasm and generosity of her time in preparing for the workshop. She did an excellent job facilitating the workshop as well, sharing her knowledge skillfully, and encouraging thoughtful discussion. Jane has been a great partner and would bring a lot of value to DE&I topics for any organization"</p>
          <span>- Shaila Kapur, Business Strategy Principal | Mergence Advisors</span>
        </div>
      </ReactSwipe>
      <input type="image" src="https://img.icons8.com/ios/50/000000/chevron-right.png" name="saveForm" id="nextBtn" onClick={() => reactSwipeEl.next()}/>
      {/* <button className="next-service" onClick={() => reactSwipeEl.next()}>Next</button> */}
    </div>
  );
};

export default Testimonials;