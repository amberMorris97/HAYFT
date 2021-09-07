import React, { useState } from 'react';

const advisingPic = './images/advising-pic.png';

const Descriptions = ({ descriptionList, tab }) => {
console.log(tab)

  return (
    <div className="service-descriptions">
      {descriptionList.map((el, idx) => (
        <div key={el.title} className="description" id={el.id}>
          <div id="service-img-overlay"></div>
          {tab === 'advising' && idx === 0 ? <img src={el.img} height="350" width="350" alt={el.alt} /> : tab === 'coaching' && idx === 1 ? <img src={el.img} height="350" width="350" alt={el.alt} /> : tab === 'gathering' && idx === 2 ? <img src={el.img} height="350" width="350" alt={el.alt} /> : <img src={el.img} height="250" width="250" alt={el.alt} />}
          <h1>{el.title}</h1>
          <h3>{el.subtitle}</h3>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;