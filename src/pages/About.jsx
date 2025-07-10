import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro section">
        <h1>About Us</h1>
        <p>
          We are a passionate group of B.Tech students committed to building a more inclusive digital world.
          With our skills in full-stack development and accessibility-focused design, we created the Accessible City Guide
          to help individuals with disabilities navigate urban spaces confidently.
        </p>
      </section>

      <section className="about-mission section">
        <h2>Our Mission</h2>
        <p>
          To empower people with mobility challenges, visual impairments, and other disabilities by providing
          real-time, reliable, and accessible information about public spaces, transportation, and infrastructure.
        </p>
      </section>

      <section className="about-what section">
        <h2>What is the Accessible City Guide?</h2>
        <p>
          Accessible City Guide is a platform designed to:
        </p>
        <ul>
          <li>✅ Locate wheelchair-friendly venues</li>
          <li>✅ Discover accessible public transport</li>
          <li>✅ Read and write user-submitted accessibility reviews</li>
          <li>✅ Get directions with accessible routes</li>
        </ul>
        <p>
          It is built with accessibility standards in mind, ensuring compatibility with screen readers, keyboard navigation,
          and high-contrast UI.
        </p>
      </section>

      <section className="about-problem section">
        <h2>The Problem We're Solving</h2>
        <p>
          Many places don’t disclose details about ramps, lifts, braille signage, or auditory alerts.
          This results in reduced independence for individuals with disabilities. Our guide bridges this gap by crowdsourcing and verifying accessibility data.
        </p>
      </section>

      <section className="about-tech section">
        <h2>Technologies We Use</h2>
        <ul>
          <li>⚛️ <strong>Frontend:</strong> React.js, Tailwind CSS</li>
          <li>🛠️ <strong>Backend:</strong> Node.js, Express</li>
          <li>📦 <strong>Database:</strong> MongoDB</li>
          <li>🗺️ <strong>APIs:</strong> Google Maps, OpenStreetMap</li>
          <li>♿ <strong>Accessibility Testing:</strong> Lighthouse, Axe DevTools</li>
        </ul>
      </section>

      <section className="about-features section">
        <h2>Core Features</h2>
        <ul>
          <li>✅ Search accessible locations</li>
          <li>✅ Submit & rate places</li>
          <li>✅ Filter by specific needs (e.g., visual aid, mobility support)</li>
          <li>✅ Community discussion and Q&A</li>
        </ul>
      </section>

      <section className="about-vision section">
        <h2>Our Vision</h2>
        <p>
          We plan to:
        </p>
        <ul>
          <li>🌍 Expand to more cities</li>
          <li>🤝 Partner with municipalities</li>
          <li>📱 Launch mobile apps</li>
          <li>🧠 Integrate AI for accessibility prediction</li>
        </ul>
      </section>

      <section className="about-team section">
        <h2>Meet the Team</h2>
        <ul>
          <li>👩‍💻 <strong>Priya</strong> – Frontend Developer</li>
          <li>👨‍💻 <strong>abc</strong> – Backend Engineer</li>
          <li>👨‍🎓 <strong>def</strong> – Database & Deployment</li>
        </ul>
      </section>

      <section className="about-impact section">
        <h2>Why It Matters</h2>
        <p>
          Accessibility is not just a feature — it's a right. Our platform is a step toward creating smarter,
          more inclusive cities where everyone has equal access to public life.
        </p>
      </section>

       {/* ✉️ Contact Section */}
      <section className="about-contact section">
        <h2>Contact Us</h2>
        <p>
          Have suggestions, feedback, or want to collaborate? We'd love to hear from you.
        </p>
        <Link to="/contact" className="contact-link-button">
          Go to Contact Page
        </Link>
      </section>
    </div>
  );
};

export default About;
