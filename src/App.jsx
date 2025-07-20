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
          <Route path="/places" element={<ProtectedRoute><Places /></ProtectedRoute>} />
          <Route path="/places/:id" element={<ProtectedRoute><PlaceDetails /></ProtectedRoute>} />
          <Route path="/submit" element={<ProtectedRoute><SubmitPlace /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/tips" element={<ProtectedRoute><Tips /></ProtectedRoute>} />
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
