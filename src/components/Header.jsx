import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('username');
      const storedRole = localStorage.getItem('role');
      setUsername(storedUser);
      setRole(storedRole);
    };

    loadUser();
    window.addEventListener('loginStatusChanged', loadUser);

    return () => {
      window.removeEventListener('loginStatusChanged', loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setUsername(null);
    setRole(null);
    window.dispatchEvent(new Event('loginStatusChanged'));
    navigate('/login');
  };

  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Accessible City Guide</Link>

        <nav className="navbar-links">
          {!username ? (
            <>
              {/* Guest Links */}
              <Link to="/places">Places</Link>
              <Link to="/submit">Submit</Link>
              <Link to="/tips">Tips</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
            </>
          ) : role === 'admin' ? (
            <>
              {/* Admin Links */}
              <Link to="/admin-dashboard">Admin Dashboard</Link>
              <Link to="/manage-users">Manage Users</Link>
              <Link to="/manage-places">Manage Places</Link>
              <span className="username">👑 Admin</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              {/* User Links */}
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/my-submissions">My Submissions</Link>
              <Link to="/saved-places">Saved Places</Link>
              <Link to="/profile">Profile</Link>
              <span className="username">👋 {username}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
