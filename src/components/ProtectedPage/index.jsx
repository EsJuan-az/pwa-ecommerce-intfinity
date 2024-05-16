import PropTypes from 'prop-types';
import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const ProtectedPage = ({ children }) => {
  const { isAuthenticated, isUserLoading} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if(!isAuthenticated && !isUserLoading){
      navigate('/login');
    }
  }, [isAuthenticated, isUserLoading]);
  return children;
};
ProtectedPage.propTypes = {
    children: PropTypes.node,
};
export default ProtectedPage;