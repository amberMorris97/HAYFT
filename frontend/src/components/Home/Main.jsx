import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, Move, Sticky } from 'react-scroll-motion';
import Services from './Services/Services.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Blog from './Blog/Main.jsx';
import About from './About/About.jsx';
import Button from "@material-ui/core/Button";
import { Link } from 'react-scroll';
import Footer from '../Footer/Footer.jsx';
import Resources from '../Footer/Resources.jsx';

const Main = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
    <div id="home-page">
      <ScrollPage page={0}>
        <Animator animation={FadeUp}>
    <div id='landing-content' className="fullscreen">
      <h1>
        Diversity
        <br />
        Equity
        <br />
        Inclusion
      </h1>
      <p> Together, we can create a cycle of <strong>inquiry</strong>, <strong>reflection</strong>, and <strong>being</strong> that will help you grow and your teams thrive.</p>
      <br />
      <div id="landing-btns">
        <Link activeClass="active"
          to="services-container"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          isDynamic={true}>
        <Button className="learn-more-btn">Learn More</Button>
        </Link>
        <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
          isDynamic={true}>
        <Button className="lets-connect-btn">Let&apos;s Connect</Button>
        </Link>
      </div>
    </div>
    </Animator>
      </ScrollPage>
      <div id="separator" style={{ height: '50vh', backgroundColor: '#0b0c10'}}></div>
    <Services/>
    <About />
    <Testimonials />
    <br />
    <Blog />
    <Footer />
    <Resources />
    </div>
    </ScrollContainer>
  );
};

export default Main;
