import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
      <Card variant="elevation" elevation={15}>
        <CardContent>
          <p className="service-text">{tab === 'advising' ? descriptionList[0].text : tab === 'coaching' ? descriptionList[1].text : descriptionList[2].text}</p>
        </CardContent>
      </Card>
      <div id="service-carousel-btns">
       <i onClick={(e) => handleClick(e)} className="fas fa-chevron-left"></i>
        <i onClick={(e) => handleClick(e)} className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default DescriptionCarousel;