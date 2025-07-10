// File: src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-brand">
            <h4>Accessible City Guide</h4>
            <p>Making cities inclusive for everyone, one place at a time. Explore, contribute, and connect.</p>
          </div>

          <div className="footer-column">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/register">Get Started</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Resources</h5>
            <ul>
              <li><a href="/accessibility-tips">Accessibility Tips</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Connect</h5>
            <ul className="socials">
              <li><a href="#">🐦 Twitter</a></li>
              <li><a href="#">📘 Facebook</a></li>
              <li><a href="#">📸 Instagram</a></li>
              <li><a href="#">💼 LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Accessible City Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
