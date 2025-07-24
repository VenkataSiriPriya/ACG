import React, { useState } from 'react';
import './Submit.css';

const SubmitPlace = () => {
  const [placeName, setPlaceName] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [comments, setComments] = useState('');
  const [features, setFeatures] = useState([]);
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const accessibilityOptions = [
    "Wheelchair Accessible Entrance",
    "Ramp Available",
    "Elevator Access",
    "Accessible Restroom",
    "Braille Signage",
    "Guide Dog Friendly",
    "Tactile Pathways",
    "Disabled Parking",
  ];

  const handleFeatureChange = (feature) => {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);

    const formData = new FormData();
    formData.append('place_name', placeName);
    formData.append('place_type', placeType);
    formData.append('address', address);
    formData.append('city', city);
    features.forEach(f => formData.append('features', f));
    formData.append('comments', comments);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch('https://backend-acg.onrender.com/api/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setPlaceName('');
        setPlaceType('');
        setAddress('');
        setCity('');
        setComments('');
        setFeatures([]);
        setImage(null);
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  return (
    <div className="submit-page">
      {submitted && (
        <div className="success-modal">
          <div className="success-box">
            <h2>🎉 Yahoo! You’ve submitted it 🎉</h2>
            <p>Thank you for contributing to the community!</p>
            <button onClick={handleOk} className="ok-btn">OK</button>
          </div>
        </div>
      )}

      {!submitted && (
        <>
          <section className="submit-header">
            <h1>Submit a Place</h1>
            <p>
              Help the community by sharing information about accessible places you’ve visited.
              Fill out the form below with accurate details.
            </p>
          </section>

          <form className="submit-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Place Name</label>
              <input
                type="text"
                value={placeName}
                onChange={e => setPlaceName(e.target.value)}
                placeholder="E.g., City Library"
                required
              />
            </div>

            <div className="form-group">
              <label>Type of Place</label>
              <select
                value={placeType}
                onChange={e => setPlaceType(e.target.value)}
                required
              >
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
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="123 Main St, New Delhi"
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="City Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Upload Image (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
              />
            </div>

            <div className="form-group">
              <label>Accessibility Features</label>
              <div className="checkbox-list">
                {accessibilityOptions.map(option => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={features.includes(option)}
                      onChange={() => handleFeatureChange(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Additional Comments</label>
              <textarea
                rows="4"
                value={comments}
                onChange={e => setComments(e.target.value)}
                placeholder="Any extra details..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Place</button>
          </form>
        </>
      )}
    </div>
  );
};

export default SubmitPlace;
