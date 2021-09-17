import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const DescriptionCarousel = ({ tab, descriptionList, setTab }) => {

  const handleClick = (e) => {
    const forward = {
      advising: 'coaching',
      coaching: 'gathering',
      gathering: 'advising'
    }
    const back = {
      gathering: 'coaching',
      coaching: 'advising',
      advising: 'gathering',
    }
    e.target.classList[1] ==='fa-chevron-right' ? setTab(forward[tab]) : setTab(back[tab]);
  }

  return (
    <div id="description-carousel">
      <div id="service-carousel-btns">
       <i onClick={(e) => handleClick(e)} className="fas fa-chevron-left"></i>
        <i onClick={(e) => handleClick(e)} className="fas fa-chevron-right"></i>
      </div>
      <Card variant="elevation" elevation={24}>
        <CardContent>
          <p className="service-text">{tab === 'advising' ? descriptionList[0].text : tab === 'coaching' ? descriptionList[1].text : descriptionList[2].text}</p>
        </CardContent>
      </Card>
    </div>
  );
}

DescriptionCarousel.propTypes = {
  tab: PropTypes.string,
  descriptionList: PropTypes.array,
  setTab: PropTypes.func,
};

export default DescriptionCarousel;