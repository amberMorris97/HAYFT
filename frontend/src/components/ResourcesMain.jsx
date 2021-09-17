import React, { useEffect } from 'react';
import Footer from './Footer/Footer.jsx';
import Resources from './Footer/Resources.jsx';

const ResourcesMain = () => {
  const linkStyle = {
    fontFamily: 'Open Sans',
  }
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Lato',
    marginTop: '50px',
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={pageStyle} id="main-resources">
      <h1>{`Read & Think More`}</h1>
      <ul>
        <li style={linkStyle}>
          <a href="https://anchor.fm/faith-clarke/episodes/Jane-Rosenzweig-Race-in-the-Workplace-e13efsr">Race In The Workplace</a>
        </li>
      </ul>
      <Footer />
      <Resources />
    </div>
  );
};

export default ResourcesMain;