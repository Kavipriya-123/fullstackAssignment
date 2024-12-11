import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationDropdown = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/locations')
      .then(response => setLocations(response.data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <select>
      {locations.map(location => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default LocationDropdown;
