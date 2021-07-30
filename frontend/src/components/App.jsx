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
import Blog from './Home/Blog/Main.jsx';
import SinglePost from './Blog/SinglePost.jsx';
import NewPost from './Blog/NewPost.jsx';
import Login from './Admin/Login.jsx';

const App = () => {

  return (
    <Router>
    <div id="app-content">
   <Header />
   <Switch>
     <Route exact path="/" component={Main} />
     <Route exact path="/blog" render={() => <Blog fullscreen="fullscreen" />} />
     <Route exact path="/blog/:id" component={SinglePost} />
     <Route exact path="/create-blog-post" component={NewPost} />
   </Switch>
    <Footer />
    </div>
   </Router>
  );
};

export default App;