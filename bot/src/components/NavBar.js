import React, { useState } from 'react';

export default function NavBar({ onSearch, scrollToBot }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Call the onSearch function with the search text
    onSearch(searchText);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="input-group">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search by name"
            aria-label="Search"
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
