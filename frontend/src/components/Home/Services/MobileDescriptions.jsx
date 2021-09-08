import React from 'react';

const Descriptions = ({ descriptionList, tab }) => {

  if (tab === 'advising') {
    return (
      <div className="s-d-mobile">
        <div id="service-img-overlay"></div>
        <img src={descriptionList[0].img} height="350" width="350" alt={descriptionList[0].alt} />
        <h1>{descriptionList[0].title}</h1>
        <h3>{descriptionList[0].subtitle}</h3>
      </div>
    );
  }

  if (tab === 'coaching') {
    return (
      <div className="s-d-mobile">
        <div id="service-img-overlay"></div>
        <img src={descriptionList[1].img} height="350" width="350" alt={descriptionList[1].alt} />
        <h1>{descriptionList[1].title}</h1>
        <h3>{descriptionList[1].subtitle}</h3>
      </div>
    );
  }

  if (tab === 'gathering') {
    return (
      <div className="s-d-mobile">
        <div id="service-img-overlay"></div>
        <img src={descriptionList[2].img} height="350" width="350" alt={descriptionList[2].alt} />
        <h1>{descriptionList[2].title}</h1>
        <h3>{descriptionList[2].subtitle}</h3>
      </div>
    );
  }

};

export default Descriptions;