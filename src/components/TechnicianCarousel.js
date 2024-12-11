import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TechnicianCarousel = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/featured-technicians')
      .then(response => setTechnicians(response.data))
      .catch(error => console.error('Error fetching technicians:', error));
  }, []);

  return (
    <div className="carousel">
      {technicians.map(technician => (
        <div key={technician.technician_id} className="technician-card">
          <img src={technician.photo} alt={technician.name} />
          <h3>{technician.name}</h3>
          <p>{technician.specialization}</p>
          <p>Rating: {technician.rating}</p>
          <p>{technician.description}</p>
          <button>Contact</button>
        </div>
      ))}
    </div>
  );
};

export default TechnicianCarousel;
