import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Accessible City Guide</Link>
        <nav className="navbar-links">
          <Link to="/places">Places</Link>
          <Link to="/submit">Submit</Link>
          <Link to="/tips">Tips</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
