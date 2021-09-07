import React from 'react';
import Footer from './Footer/Footer.jsx';
import Resources from './Footer/Resources.jsx';

const AboutMain = () => {

  return (
    <div id="about-main">
      <h1>About Jane</h1>
      <p>Jane has spent her career developing corporate DEI strategies anchored in social justice foundations. As the first Head of DEI (CDO) at W.L. Gore &amp; Associates (www.gore.com) Jane developed a philosophy and strategy that built on Gore’s humanistic values and innovative business model. Relying on culture change and social movement methodologies, Jane galvanized the involvement of thousands of Associates from around the world. Using curiosity and conversation, teams deepened their understanding of identity differences and committed to disrupting bias in day-to-day life. With a strong focus on systems and structures, Jane&apos;s approach is rooted in her belief that empathy and dialogue can solve most things.</p>
      <p>Prior to Gore, Jane spent 11 years at J.P. Morgan Chase in NYC. As part of the Corporate Diversity team, she was responsible for the employee engagement and communication strategy. She began her career at the US Attorney&apos;s Office in Washington, DC, where she had her fist formal DEI role: EEO Investigator. Jane has a BA, Justice and an MS, Organization Development, both from American University in Washington, DC.</p>
      <Footer/>
      <Resources />
    </div>
  );
};

export default AboutMain;