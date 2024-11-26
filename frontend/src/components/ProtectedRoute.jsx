import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect toe login if no tokenm
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
