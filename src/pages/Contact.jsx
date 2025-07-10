import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, suggestions, or feedback, feel free to reach out.
          We value your input and are here to help!
        </p>
      </section>

      <section className="contact-info">
        <h2>Our Contact Details</h2>
        <p>Email: <a href="mailto:accessiblecityguide@example.com">accessiblecityguide@example.com</a></p>
        <p>Phone: +91 98765 43210</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
