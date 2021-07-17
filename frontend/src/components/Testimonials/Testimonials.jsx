import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const circle = './images/circle.png';
// const square = './images/gray.jpg'
// const christian = './images/ChristianLanger.jpeg';

const Testimonials = () => {
  const quoteIconStyle = {
    fontSize: '10em',
    color: '#266150',
  }
  const rightArrowStyle = {
    fontSize: '5em',
    color: '#000',
    marginRight: '25vw',
    marginTop: '25vh'
  }
  const leftArrowstyle = {
    fontSize: '5em',
    color: '#000',
    marginLeft: '25vw',
    marginTop: '25vh',
  }

  const rightArrow = <ArrowForwardIcon style={rightArrowStyle} />;
  const leftArrow = <ArrowBackIcon style={leftArrowstyle} />;


  return (
    <div id="testimonials-page" className="fullscreen">
      <h1 id="testimonials-title" className="header-text muli">T E S T I M O N I A L S</h1>
        <FormatQuoteIcon style={quoteIconStyle} />
      <Carousel nextLabel={null} prevLabel={null} interval={null} indicators keyboard slide wrap touch nextIcon={rightArrow} prevIcon={leftArrow}>
        <Carousel.Item className="carousel-item">
          {/* <Card elevation={23}> */}
          <div className="carousel-content">
          <h3>&quot;Jane connects easily with others and builds trust throughout the process.&quot;</h3>
          <p>&quot;She is incredibly insightful and takes the time to truly understand the culture of the organization as an essential component of her work. Working with Jane is a very rewarding experience.&quot;</p>
            <img src={circle} />
            <span>Teri Kelly, former CEO, W.L. Gore &amp; Associates</span>
          </div>
          {/* </Card> */}
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
            {/* <Card elevation={23}> */}
            <div className="carousel-content">
            <h3>&quot;Jane Rosenzweig is your insightful, experienced and fun-to-work-with guide. Enjoy the ride.&quot;</h3>
            <p>“A workplace can be virtuous and fun or it can be treacherous and a grind. Jane helps you realize that leading through diversity, equity, inclusion and belonging can translate into both engaged employees &amp; higher profits.”</p>
              <img src={circle} />
              <span>Christian Langer, Founder &amp; MD KORE</span>
            </div>
            {/* </Card> */}
       </Carousel.Item>

       <Carousel.Item className="carousel-item">
           {/* <Card elevation={23}> */}
          <div className="carousel-content">
           <h3>&quot;Jane is a true asset to any organization focused on delivering diversity and inclusion solutions.&quot;</h3>
           <p>&quot;It’s rare that you come across a Diversity and Inclusion leader like Jane. I have had the pleasure of working with Jane for the last 10 years at W.L. Gore &amp; Associates, collaborating on several project teams. I was always particularly impressed by Jane’s ability to handle the toughest situations – from a difficult stakeholder to a frustrated employee – effortlessly. This is a finely honed skill of hers that she uses naturally in her engagements. No matter how tense a conversation, Jane made sure that everyone left feeling heard and respected. She earns my highest recommendation.&quot;</p>
              <img src={circle} />
              <span>Liz David, Manager, PWC</span>
          </div>
          {/* </Card> */}
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
          {/* <Card elevation={23}> */}
          <div className="carousel-content">
          <h3>&quot;Jane was a pleasure to work with from the beginning, bringing knowledge, enthusiasm and generosity.&quot;</h3>
          <p>&quot;We worked with Jane recently when she volunteered to facilitate a DE&amp;I discussion for a not for profit girls school, Serviam Academy. She did an excellent job facilitating the workshop, sharing her knowledge skillfully, and encouraging thoughtful discussion. Jane has been a great partner and would bring a lot of value to DE&amp;I topics for any organization.&quot;</p>
            <img src={circle} />
            <span>Shaila Kapur, Business Strategy Principal, Mergence Advisors</span>
          </div>
          {/* </Card> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;