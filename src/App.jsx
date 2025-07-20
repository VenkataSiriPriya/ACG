// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import NotFound from './Error/NotFound';
import ProtectedRoute from './Error/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
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
          <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/manage-users" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
