import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { LOGOUT_SUCCESS }  from '../../redux/types';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    axios.get('/end')
      .then((res) => {
        console.log(res)
        // if (res.data === 'logged out') dispatch({ type: LOGOUT_SUCCESS });
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Logout;