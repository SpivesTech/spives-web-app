import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = /* Your authentication logic here */ false;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;