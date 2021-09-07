import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, StickyOut, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';
import Services from './Services/Services.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Blog from './Blog/Main.jsx';
import About from './About/About.jsx';
import PurpleButton from "../Buttons/PurpleButton.jsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';
import Resources from '../Footer/Resources.jsx';

const Main = () => {
  const ZoomInScrollOut = batch(Sticky(), MoveOut(0, -200), FadeOut());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
    <div id="home-page">
      <ScrollPage page={0}>
        <Animator animation={FadeUp}>
    <div id='landing-content' className="fullscreen">
    {/* <div className="midground"></div> */}
    {/* <div className="foreground"></div> */}
      <h1>
        Diversity
        <br />
        Equity
        <br />
        Inclusion
      </h1>
      <p> Together, we can create a cycle of <strong>inquiry</strong>, <strong>reflection</strong> and <strong>being</strong> that will help you grow and your teams thrive.</p>
      <br />
      <div id="landing-btns">
        <Button className="learn-more-btn">Learn More</Button>
        <Button className="lets-connect-btn">Let&apos;s Connect</Button>
      </div>
      {/* <Link style={{ textDecoration: 'none' }} to="/about"><PurpleButton text={"LEARN MORE"} /></Link>
      <Link style={{ textDecoration: 'none' }} to="/contact"><PurpleButton text={"Let's Connect"} /></Link> */}
    </div>
    </Animator>
      </ScrollPage>
      <div style={{ height: '50vh', backgroundColor: '#0b0c10'}}></div>
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
