import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-acg.onrender.com/api/auth/login', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Store username and role
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', data.role); // "admin" or "user"
        window.dispatchEvent(new Event('loginStatusChanged'));

        setLoggedInUser(data.username);
        setRole(data.role);
        setShowSuccess(true);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Server error');
    }
  };

  const handleSuccessOk = () => {
    // Redirect based on role
    if (role === 'admin') {
      navigate('/');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      {showSuccess && (
        <div className="success-box-overlay">
          <div className="success-box">
            <h3>🎉 Login Successful</h3>
            <p>Welcome back, <strong>{loggedInUser}</strong>!</p>
            <button onClick={handleSuccessOk}>OK</button>
          </div>
        </div>
      )}

      <div className="login-box">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue to Accessible City Guide</p>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="links">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="register-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>

      <div className="login-info">
        <h3>Why Accessible City Guide?</h3>
        <p>
          We believe in making every corner of the city reachable. Our platform
          helps you discover restaurants, hospitals, parks, and more with verified
          accessibility features like wheelchair ramps, tactile paths, and guide dog support.
        </p>
        <p>🌍 Inclusion is not an option — it's a necessity.</p>
      </div>
    </div>
  );
};

export default Login;
