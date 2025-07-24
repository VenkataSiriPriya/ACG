// src/pages/Places.jsx
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import './Places.css';


const Places = () => {
  const navigate = useNavigate();
  const [approvedPlaces, setApprovedPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://backend-acg.onrender.com/api/submit')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch places');
        }
        return res.json();
      })
      .then((data) => {
        const approved = data.filter((place) => place.status === 'approved');
        setApprovedPlaces(approved);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading approved places:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  // Get unique cities and types for info display
  const uniqueCities = [...new Set(approvedPlaces.map(place => place.city))];
  const uniqueTypes = [...new Set(approvedPlaces.map(place => place.place_type))];

  if (loading) {
    return (
      <div className="places-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading places...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="places-container">
        <div className="error-message">
          <div className="error-icon">⚠️</div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="places-container">
      {/* Header */}
      <div className="places-header">
        <h2>Discover Amazing Places</h2>
        <p className="places-description">
          Explore handpicked locations from our community. From hidden gems to popular destinations,
          find your next adventure right here.
        </p>
        <div className="places-stats">
          <div className="stat-item">
            <span className="stat-number">{approvedPlaces.length}</span>
            <span className="stat-label">Total Places</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{uniqueCities.length}</span>
            <span className="stat-label">Cities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{uniqueTypes.length}</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="places-info">
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🌍</div>
            <h4>Diverse Locations</h4>
            <p>From bustling city centers to serene natural spots, discover places that match every mood and interest.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📸</div>
            <h4>Real Photos</h4>
            <p>Each location features authentic photos shared by community members who have visited these places.</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⭐</div>
            <h4>Community Curated</h4>
            <p>All places are carefully reviewed and verified by our community to ensure quality experiences.</p>
          </div>
        </div>
      </div>

      {/* Places List */}
      <div className="places-content">
        {approvedPlaces.length === 0 ? (
          <div className="no-places">
            <div className="no-places-icon">📍</div>
            <h3>No places available yet</h3>
            <p>Be the first to share amazing places with the community!</p>
          </div>
        ) : (
          <div className="places-list">
            {approvedPlaces.map((place, index) => (
              <div key={place.id} className="place-card" style={{ animationDelay: `${index * 0.1}s` }}>
                {place.image && (
                  <div className="place-image-container">
                    <img
                      src={`https://backend-acg.onrender.com/uploads/${place.image}`}
                      alt={place.place_name}
                      className="place-image"
                      onError={handleImageError}
                    />
                    <div className="image-overlay">
                      <span className="place-type-badge">{place.place_type}</span>
                    </div>
                  </div>
                )}
                
                <div className="place-info">
                  <div className="place-header">
                    <h3 className="place-name">{place.place_name}</h3>
                    <div className="place-location">
                      <span className="location-icon">📍</span>
                      <span>{place.city}</span>
                    </div>
                  </div>
                  
                  <div className="place-details">
                    <div className="detail-row">
                      <span className="detail-label">Address:</span>
                      <span className="detail-value">{place.address}</span>
                    </div>
                    
                    {place.features && place.features.length > 0 && (
                      <div className="detail-row">
                        <span className="detail-label">Features:</span>
                        <div className="features-tags">
                          {place.features.map((feature, idx) => (
                            <span key={idx} className="feature-tag">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {place.comments && (
                      <div className="place-comments">
                        <span className="comment-icon">💬</span>
                        <p>{place.comments}</p>
                      </div>
                    )}
                  </div>

                  <div className="place-actions">
                    <button className="action-btn primary">
                      <span className="btn-icon">🗺️</span>
                      View Location
                    </button>
                    <button className="action-btn secondary">
                      <span className="btn-icon">📤</span>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="bottom-info">
        <h3>Want to share a place?</h3>
        <p>Help others discover amazing locations by sharing your favorite spots with our community.</p>
        <button
    className="contribute-btn"
    onClick={() => navigate('/submit')} // navigate to the submit page
  >
    <span className="btn-icon">✨</span>
    Contribute a Place
  </button>
      </div>
    </div>
  );
};

export default Places;