import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = jwtDecode(sessionStorage.getItem('token'))
    ? true
    : false;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;