import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('https://backend-acg.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true); // show modal
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      alert('Server error');
    }
  };

  const handleSuccessOk = () => {
    setShowSuccess(false);
    navigate('/login');
  };

  return (
    <div className="register-container">
      {showSuccess && (
        <div className="success-box-overlay">
          <div className="success-box">
            <h3>🎉 Registered Successfully!</h3>
            <p>Thank you for joining Accessible City Guide.</p>
            <button onClick={handleSuccessOk}>OK</button>
          </div>
        </div>
      )}

      <div className="register-box">
        <form onSubmit={handleRegister} className="register-form">
          <h2>Create Your Account</h2>
          <p>Join Accessible City Guide today</p>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Create password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>

          <button type="submit" className="register-btn">Register</button>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>

      <div className="register-info">
        <h3>Be Part of the Change 🌟</h3>
        <p>
          Your contributions help create a more inclusive world. By registering,
          you can submit accessible places, suggest improvements, and join a
          community that values everyone’s right to explore.
        </p>
        <p>✨ Let's build an accessible city together.</p>
      </div>
    </div>
  );
};

export default Register;
