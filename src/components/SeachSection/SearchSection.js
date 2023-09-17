import React, { useState } from 'react';
import './SearchSection.css';

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for:', searchTerm);
    // You can perform your search operations here, e.g., fetch data from an API
  };

  return (
    <div className="make-center">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input" // Apply the CSS class to the input
        />
        <button onClick={handleSearch} className="search-button">
          Add City
        </button>{' '}
      </div>
    </div>
  );
}

export default SearchSection;
