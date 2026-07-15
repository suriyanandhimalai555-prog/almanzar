import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check if the user is logged in by looking for the distributorId in localStorage
  const isAuthenticated = localStorage.getItem('distributorId');

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/distributor/login" replace />;
  }

  // If authenticated, render the child routes (the dashboard)
  return <Outlet />;
};

export default ProtectedRoute;