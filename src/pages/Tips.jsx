import React from 'react';
import './Tips.css';

const Tips = () => {
  return (
    <div className="tips-container">
      <h1>🌟 Helpful Tips for Exploring with Accessible City Guide</h1>
      <p className="intro">Make the most of your journey with our top recommendations.</p>

      <div className="tips-section">
        <h2>💼 Profile & Preferences</h2>
        <ul>
          <li>✅ Keep your profile updated with your accessibility preferences.</li>
          <li>📷 Add a profile picture to help others recognize your contributions.</li>
          <li>🔔 Enable notifications to get updates on accessible places nearby.</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>🗺️ Discover & Contribute</h2>
        <ul>
          <li>📍 Use the map view to find verified accessible locations.</li>
          <li>✍️ Share reviews, photos, and accessibility details for places you visit.</li>
          <li>👥 Join discussions and report issues to help improve accuracy.</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>🌐 Community & Engagement</h2>
        <ul>
          <li>🤝 Support other users by liking and commenting on their reviews.</li>
          <li>🧠 Suggest new features or improvements for the platform.</li>
          <li>🎉 Participate in monthly challenges and earn recognition badges!</li>
        </ul>
      </div>

      <div className="tips-footer">
        <p>🌍 Together, we can make cities more inclusive for everyone.</p>
      </div>
    </div>
  );
};

export default Tips;
