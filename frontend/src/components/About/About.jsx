import React from 'react';
import PurpleButton from '../Buttons/PurpleButton.jsx';
import { Card } from '@material-ui/core';
// const gray = './images/gray.jpg';

const About = () => {
  return (
    <div id="about-page" className="fullscreen">
      <div className="about-heading">
        <h1 id="about-title" className="muli header text">DE&amp;I Consultant</h1>
        <span className="openSans" id="about-text">Together, we can help your workplace evolve.</span>
      </div>
      <div id="about-content">
        <Card variant="elevation" elevation={15}></Card>
        <p className="openSans about-para">Lorem Ipsum... Brown guilty eyes and little white lies yea I played dumb but I always knew. That you talked to her, maybe, did even worse. I kept quiet so I could keep you. Aint it funny? How you ran to her, the second that we called it quits. And aint it funny, how you said you were friends. Now it sure as hell don&#39;t look like it. You betrayed me. And I know that you&#39;ll never feel sorry, for the I hurt. Yeah, you talked to her when we were together loved you at your worst but that didn&#39;t matter. It took you two weeks, to go off and date her, guess you didn&#39;t cheat. But you&#39;re still a traitor.</p>
        <PurpleButton text={'WORK WITH ME'} />
      </div>
    </div>
  );
};

export default About;