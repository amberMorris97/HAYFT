import React from "react";
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
  return (
    <div id="home-page">
    <div id='landing-content' style={{ height: '75vh' }}>
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
    <Services />
    <About />
    <Testimonials />
    <br />
    <Blog />
    <Footer />
    <Resources />
    </div>
  );
};

export default Main;
