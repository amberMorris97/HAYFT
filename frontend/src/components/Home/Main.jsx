import React from "react";
import Services from './Services/Services.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Blog from './Blog/Main.jsx';
import About from './About/About.jsx';
import PurpleButton from "../Buttons/PurpleButton.jsx";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div id="home-page">
    <div id='landing-content' className="fullscreen">
      <h1>
        Diversity
        <br />
        Equity &amp;
        <br />
        Inclusion
      </h1>
      <p> together, we can create a cycle of <strong>inquiry</strong>, <strong>reflection</strong> and <strong>being</strong> that will help you grow and your teams thrive.</p>
      <br />
      <Link to="/about"><PurpleButton text={"LEARN MORE"} /></Link>
    </div>
    <Services />
    <About />
    <Testimonials />
    <Blog />
    </div>
  );
};

export default Main;
