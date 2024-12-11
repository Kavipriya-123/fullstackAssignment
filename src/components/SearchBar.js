import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value) {
      axios.get(`http://localhost:5000/appliances?q=${e.target.value}`)
        .then(response => setSuggestions(response.data))
        .catch(error => console.error('Error fetching appliance types:', error));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search appliance types..."
      />
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion.appliance_id}>{suggestion.type_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

