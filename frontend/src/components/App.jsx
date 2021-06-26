import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadUser from '../redux/actions/authActions';
import Login from './User/Login.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(null);

  useEffect(() => {
    if (login) dispatch(loadUser(login));
  }, [login]);

  return (
    <div>
      <h1>App</h1>
      <Login login={(user) => setLogin(user)}/>
      <button onClick={() => dispatch({type: 'LOGOUT_SUCCESS'})}>logout</button>
    </div>
  );
};

export default App;