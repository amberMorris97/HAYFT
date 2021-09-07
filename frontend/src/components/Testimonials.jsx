import React from 'react';
import { TK, CL, SK } from './Home/Testimonials/quotes';
import Footer from './Footer/Footer.jsx';
import Resources from './Footer/Resources.jsx';

const Testimonials = () => (
  <div className="all-testimonials">
    <h1>Working With Jane</h1>
    <div className="testimonial-text" id="tk-testimonial">
      <h3>{TK.head}</h3>
      <p>{TK.para}</p>
      <img src={TK.img} alt="teri-kelly-photo" width="100" height="100" />
      <br />
      <span>{TK.spn}</span>
    </div>
    <div className="testimonial-text" id="CL-testimonial">
      <h3>{CL.head}</h3>
      <p>{CL.para}</p>
      <img src={CL.img} alt="teri-kelly-photo" width="100" height="100" />
      <br />
      <span>{CL.spn}</span>
    </div>
    <div className="testimonial-text" id="SK-testimonial">
      <h3>{SK.head}</h3>
      <p>{SK.para}</p>
      <img src={SK.img} alt="teri-kelly-photo" width="100" height="100" />
      <br />
      <span>{SK.spn}</span>
    </div>
    <Footer />
    <Resources />
  </div>
);

export default Testimonials;