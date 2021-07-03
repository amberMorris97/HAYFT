import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header.jsx';
import loadUser from '../redux/actions/authActions';
import Login from './Header/User/Login.jsx';
import Signup from './Header/User/Signup.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [user, updateUser] = useState(null);
  const [view, setView] = useState('home');

  useEffect(() => {
    axios.get('/api/users/current')
      .then((res) => {
        console.log(res)
        if (res.data.email) {
          updateUser(res.data);
        };
      })
  }, []);

  if (view === 'Login') {
    return <Login setView={setView}/>
  };

  if (view === 'Signup') {
    return <Signup setView={setView}/>
  }

  return (
    <div>
      <Header setView={setView} user={user} />
      <h1>App</h1>
    </div>
  );
};

export default App;

// -