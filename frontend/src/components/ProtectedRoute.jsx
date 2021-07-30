import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Admin/Nav.jsx';
import Main from './Home/Main.jsx';

const ProtectedRoute = () => {
  const isAuth = useSelector(state => state.authReducer.isAuthenticated);
  return (
    <div>
      {isAuth && <Nav />}
      {!isAuth && <Main />}
    </div>
  );
};

export default ProtectedRoute;