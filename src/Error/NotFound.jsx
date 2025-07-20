import React from 'react';
import './NotFound.css';

const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>
        
        <h1 className="error-title">Page Not Found</h1>
        
        <p className="error-message">
          Oops! The page you're looking for seems to have wandered off into the digital void. 
          It might have been moved, deleted, or never existed in the first place.
        </p>
        
        <div className="error-actions">
          <button className="btn btn-secondary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
        
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;