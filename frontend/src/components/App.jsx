// import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header.jsx';
import Main from './Home/Main.jsx'

import Footer from './Footer/Footer.jsx'
import Blog from './Blog/Main.jsx';

const App = () => {

  return (
    <Router>
    <div id="app-content">
   <Header />
   <Switch>
     <Route exact path="/" component={Main} />
     <Route exact path="/blog" component={Blog} />
   </Switch>
    <Footer />
    </div>
   </Router>
  );
};

export default App;