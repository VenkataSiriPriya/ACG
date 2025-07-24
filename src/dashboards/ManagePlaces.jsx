// src/dashboards/ManagePlaces.jsx
import React, { useEffect, useState } from 'react';
import './ManagePlaces.css';

const ManagePlaces = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://backend-acg.onrender.com/api/submit')
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error('Error fetching places:', err));
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      const res = await fetch(`https://backend-acg.onrender.com/api/submit/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        const updated = await res.json();
        setPlaces((prev) =>
          prev.map((place) =>
            place.id === id ? { ...place, status: updated.status } : place
          )
        );
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  const pendingPlaces = places.filter((p) => !p.status || p.status === 'pending');
  const approvedPlaces = places.filter((p) => p.status === 'approved');
  const rejectedPlaces = places.filter((p) => p.status === 'rejected');

  const renderList = (title, list) => (
    <>
      <h3>{title}</h3>
      {list.length === 0 ? (
        <p>No {title.toLowerCase()}.</p>
      ) : (
        <ul className="place-list">
          {list.map((place) => (
            <li key={place.id} className="place-card">
              <h4>{place.place_name} ({place.city})</h4>
              <p><strong>Type:</strong> {place.place_type}</p>
              <p><strong>Address:</strong> {place.address}</p>
              <p><strong>Status:</strong> {place.status}</p>
              <p><strong>Features:</strong> {place.features?.join(', ')}</p>
              <p><strong>Comments:</strong> {place.comments}</p>
              {place.image && (
                <img
                  src={`https://backend-acg.onrender.com/uploads/${place.image}`}
                  alt={place.place_name}
                  style={{ width: '200px', marginTop: '10px' }}
                />
              )}
              {place.status === 'pending' && (
                <div className="actions">
                  <button onClick={() => handleStatusUpdate(place.id, 'approved')}>✅ Approve</button>
                  <button onClick={() => handleStatusUpdate(place.id, 'rejected')}>❌ Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <div className="manage-places">
      <h2>📍 Manage Submitted Places</h2>
      {renderList('Pending Places', pendingPlaces)}
      {renderList('Approved Places', approvedPlaces)}
      {renderList('Rejected Places', rejectedPlaces)}
    </div>
  );
};

export default ManagePlaces;
