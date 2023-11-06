import React, { useState, useRef } from 'react';

export default function NavBar({ bots }) {
  const [searchText, setSearchText] = useState('');
  const [searchedBot, setSearchedBot] = useState(null);
  const botRef = useRef(null);

  const handleSearch = () => {
    // Search for the bot by name in the 'bots' prop
    const botFound = bots.find((bot) => bot.name.toLowerCase() === searchText.toLowerCase());

    if (botFound) {
      setSearchedBot(botFound);
      // Scroll to the bot element
      if (botRef.current) {
        botRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If bot is not found, reset the searchedBot state
      setSearchedBot(null);
    }
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
      {searchedBot && (
        <div className="searched-bot" ref={botRef}>
          <h2>{searchedBot.name}</h2>
          <img src={searchedBot.avatar_url} alt={`Avatar of ${searchedBot.name}`} />
        </div>
      )}
    </nav>
  );
}
