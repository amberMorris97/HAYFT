import React from "react";
import Services from './Services/Services.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import About from './About/About.jsx';
import PurpleButton from "../Buttons/PurpleButton.jsx";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const Main = () => {
  return (
    <div id="home-page">
    <div id='landing-content' className="fullscreen">
      <h1>
        Diversity
        <br />
        Equity
        <br />
        Inclusion
      </h1>
      <p> together, we can create a cycle of <strong>inquiry</strong>, <strong>reflection</strong> and <strong>being</strong> that will help you grow and your teams thrive.</p>
      <br />
      <PurpleButton text={"LEARN MORE"} />
    </div>
    <Services />
    <About />
    <Testimonials />
    </div>
  );
};

export default Main;
