import React from 'react';
import PropTypes from 'prop-types';

const Descriptions = ({ descriptionList, tab }) => {

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

Descriptions.propTypes = {
  descriptionList: PropTypes.array,
  tab: PropTypes.string,
};

export default Descriptions;