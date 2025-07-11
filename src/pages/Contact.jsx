import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-acg.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Message sending failed:', err);
      alert('Server error');
    }
  };

  const closeSuccessModal = () => {
    setSuccess(false);
    navigate('/'); // 👈 Redirect to home page
  };

  return (
    <div className="contact-page">
      {success && (
        <div className="success-box-overlay">
          <div className="success-box">
            <h3>✅ Message Sent!</h3>
            <p>Thank you for reaching out. We'll get back to you soon.</p>
            <button onClick={closeSuccessModal}>OK</button>
          </div>
        </div>
      )}

      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, suggestions, or feedback, feel free to reach out.
          We value your input and are here to help!
        </p>
      </section>

      <section className="contact-info">
        <h2>Our Contact Details</h2>
        <p>Email: <a href="mailto:accessiblecityguide@gmail.com">accessiblecityguide@gmail.com</a></p>
        <p>Phone: +91 98765 43210</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
