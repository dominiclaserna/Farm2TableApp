// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path based on your AuthContext location

const ProtectedRoute = ({ element, ...rest }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Route {...rest} element={element} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
