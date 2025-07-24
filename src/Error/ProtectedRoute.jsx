// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth");
  const fromInternalNavigation = sessionStorage.getItem("navigatedInternally");

  if (!isAuthenticated || fromInternalNavigation !== "true") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
