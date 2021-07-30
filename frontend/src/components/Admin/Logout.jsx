import React from 'react';
import User from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const user = new User();
    dispatch(user.logout());
  }

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>Logout</button>
    </div>
  );
}
export default Logout;