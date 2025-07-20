import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const visited = localStorage.getItem('visited');
  return visited === 'true' ? children : <Navigate to="/" />;
}
