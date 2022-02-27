import React, { useEffect } from 'react';
import Footer from './Footer/Footer.jsx';
import Resources from './Footer/Resources.jsx';

const janePic = './images/jrselfie.jpeg'

const AboutMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about-main">
      <h1>About Jane</h1>
      <img src={janePic} width="500" height="600" alt="jane-selfie" />
      <p>I have have spent my career developing corporate DEI strategies anchored in social justice foundations. As the first Head of DEI (CDO) at W.L. Gore &amp; Associates (www.gore.com) I developed a philosophy and strategy that built on Gore’s humanistic values and innovative business model. Relying on culture change and social movement methodologies, I was able to galvanize the involvement of thousands of Associates from around the world. Using curiosity and conversation, I helped teams deepen their understanding of identity differences and commit to disrupting bias in day-to-day life. With a strong focus on systems and structures, my approach is rooted in my belief that empathy and dialogue can solve most things.</p>
      <Footer/>
      <Resources />
    </div>
  );
};

export default AboutMain;