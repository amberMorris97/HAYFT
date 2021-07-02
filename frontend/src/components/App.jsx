import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUser from '../redux/actions/authActions';
import Login from './User/Login.jsx';
import Logout from './User/Logout.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [user, updateUser] = useState(null);

  useEffect(() => {
    axios.get('/api/users/current')
      .then((res) => {
        console.log(res)
        if (res.data.email) {
          updateUser(res.data);
        };
      })
  }, []);

  return (
    <div>
      <h1>App</h1>
      {!user ? <Login login={(user) => updateUser(user)}/> : <></>}
      <Logout />
    </div>
  );
};

export default App;

// -