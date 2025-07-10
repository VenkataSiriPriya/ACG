import React from 'react';
import './Submit.css';

const SubmitPlace = () => {
  return (
    <div className="submit-page">
      <section className="submit-header">
        <h1>Submit a Place</h1>
        <p>
          Help the community by sharing information about accessible places you’ve visited.
          Fill out the form below with accurate details.
        </p>
      </section>

      <form className="submit-form">
        {/* Basic Info */}
        <div className="form-group">
          <label>Place Name</label>
          <input type="text" placeholder="E.g., City Library" required />
        </div>

        <div className="form-group">
          <label>Type of Place</label>
          <select required>
            <option value="">-- Select --</option>
            <option>Restaurant</option>
            <option>Hospital</option>
            <option>Park</option>
            <option>Shopping Mall</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="123 Main St, New Delhi" required />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="City Name" required />
        </div>

        <div className="form-group">
          <label>Upload Image (Optional)</label>
          <input type="file" />
        </div>

        {/* Accessibility Features */}
        <div className="form-group">
          <label>Accessibility Features</label>
          <div className="checkbox-list">
            <label><input type="checkbox" /> Wheelchair Accessible Entrance</label>
            <label><input type="checkbox" /> Ramp Available</label>
            <label><input type="checkbox" /> Elevator Access</label>
            <label><input type="checkbox" /> Accessible Restroom</label>
            <label><input type="checkbox" /> Braille Signage</label>
            <label><input type="checkbox" /> Guide Dog Friendly</label>
            <label><input type="checkbox" /> Tactile Pathways</label>
            <label><input type="checkbox" /> Disabled Parking</label>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="form-group">
          <label>Additional Comments</label>
          <textarea rows="4" placeholder="Any extra details..."></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit Place</button>
      </form>
    </div>
  );
};

export default SubmitPlace;
