import React, { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const square = './images/gray.jpg'
const christian = './images/ChristianLanger.jpeg';

const Testimonials = () => {
  const quoteIconStyle = {
    fontSize: '10em',
    color: '#266150',
    justifyContent: 'center'
  }
  const rightArrowStyle = {
    fontSize: '5em',
    color: '#000',
    marginRight: '5vw',
  }
  const leftArrowstyle = {
    fontSize: '5em',
    color: '#000',
    marginLeft: '5vw'
  }

  const rightArrow = <span className="arrow-right"><ArrowForwardIcon style={rightArrowStyle} /></span>;
  const leftArrow = <span className="arrow-left"><ArrowBackIcon style={leftArrowstyle} /></span>;


  return (
    <div id="testimonials-page" className="fullscreen">
      <h1>T E S T I M O N I A L S</h1>

      <Carousel interval={null} indicators keyboard slide wrap touch nextIcon={rightArrow} prevIcon={leftArrow}>
        <Carousel.Item className="carousel-item">
        <FormatQuoteIcon style={quoteIconStyle} />
          <h3>"Jane connects easily with others and builds trust throughout the process."</h3>
          <p>"She is incredibly insightful and takes the time to truly understand the culture of the organization as an essential component of her work. Working with Jane is a very rewarding experience."</p>
            <span>Teri Kelly, former CEO, W.L. Gore &amp; Associates</span>
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <FormatQuoteIcon style={quoteIconStyle} />
            <h3>"Jane Rosenzweig is your insightful, experienced and fun-to-work-with guide. Enjoy the ride."</h3>
            <p>“A workplace can be virtuous and fun or it can be treacherous and a grind. Jane helps you realize that leading through diversity, equity, inclusion and belonging can translate into both engaged employees &amp; higher profits.”</p>
            <span>Christian Langer, Founder &amp; MD KORE</span>
       </Carousel.Item>

       <Carousel.Item className="carousel-item">
         <FormatQuoteIcon style={quoteIconStyle} />
           <h3>"Jane is a true asset to any organization focused on delivering diversity and inclusion solutions."</h3>
           <p>"It’s rare that you come across a Diversity and Inclusion leader like Jane. I have had the pleasure of working with Jane for the last 10 years at W.L. Gore &amp; Associates, collaborating on several project teams. I was always particularly impressed by Jane’s ability to handle the toughest situations – from a difficult stakeholder to a frustrated employee – effortlessly. This is a finely honed skill of hers that she uses naturally in her engagements. No matter how tense a conversation, Jane made sure that everyone left feeling heard and respected. She earns my highest recommendation."</p>
          <span>Liz David, Manager, PWC</span>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <FormatQuoteIcon style={quoteIconStyle} />
          <h3>"Jane was a pleasure to work with from the beginning, bringing knowledge, enthusiasm and generosity."</h3>
          <p>"We worked with Jane recently when she volunteered to facilitate a DE&amp;I discussion for a not for profit girls' school, Serviam Academy. She did an excellent job facilitating the workshop, sharing her knowledge skillfully, and encouraging thoughtful discussion. Jane has been a great partner and would bring a lot of value to DE&amp;I topics for any organization."</p>
          <span>Shaila Kapur, Business Strategy Principal, Mergence Advisors</span>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;