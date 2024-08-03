// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Check if user is logged in

  return (
    <Route 
      {...rest}
      element={user ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
