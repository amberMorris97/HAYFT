import React from 'react';
import { TK, CL, SK } from './Home/Testimonials/quotes';

const Testimonials = () => (
  <div className="all-testimonials">
    <div id="tk-testimonial">
      <h3>{TK.head}</h3>
      <p>{TK.para}</p>
      <img src={TK.img} alt="teri-kelly-photo" width="100" height="100" />
      <span>{TK.spn}</span>
    </div>
    <div id="CL-testimonial">
      <h3>{CL.head}</h3>
      <p>{CL.para}</p>
      <img src={CL.img} alt="teri-kelly-photo" width="100" height="100" />
      <span>{CL.spn}</span>
    </div>
    <div id="SK-testimonial">
      <h3>{SK.head}</h3>
      <p>{SK.para}</p>
      <img src={SK.img} alt="teri-kelly-photo" width="100" height="100" />
      <span>{SK.spn}</span>
    </div>
  </div>
);

export default Testimonials;