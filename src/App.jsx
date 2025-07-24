// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Places from './pages/Places';
import PlaceDetails from './pages/PlaceDetails';
import SubmitPlace from './pages/SubmitPlace';
import About from './pages/About';
import Contact from './pages/Contact';
import Tips from './pages/Tips';
import Header from './components/Header';
import Footer from './components/Footer';
import ForgotPassword from './auth/ForgotPassword';
import AdminDashboard from './dashboards/AdminDashboard';
import ManageUsers from './dashboards/ManageUsers';
import ManagePlaces from './dashboards/ManagePlaces';
import NotFound from './Error/NotFound';
import ProtectedRoute from './Error/ProtectedRoute';

function NavigationListener() {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem("navigatedInternally", "true");
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <NavigationListener />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<PlaceDetails />} />
          <Route path="/submit" element={<SubmitPlace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tips" element={<Tips />} />

          <Route path="/forgot-password" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>} />
           <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-places" element={<ManagePlaces />} />
  

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
