import User from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

export const logout = () => {
  const dispatch = useDispatch();
  const user = new User();
  dispatch(user.logout());
};