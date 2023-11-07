import React, { useState } from 'react';

const BotCollection = ({ bots, onEnlistBot, sortingOption, onFilterChange }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);

  // Moved the handleEnlist function outside of the return statement
  const handleEnlist = (bot) => {
    onEnlistBot(bot);
  };

  const handleViewDetails = (bot) => {
    setShowDetails(!showDetails); // Toggle the visibility of details
    setSelectedBot(bot); // Store the selected bot
  };

  return (
    <div className="container">
      <h1 className="text-start">MY BOT COLLECTION</h1>
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-3 mb-4">
            <div className="card">
              {/* Make the image clickable to enlist using a button */}
              <button onClick={() => handleEnlist(bot)}>
                <img src={bot.avatar_url} className="card-img-top" alt={`Avatar of ${bot.name}`} />
              </button>
              <div className="card-body">
                <h2 className="card-title">{bot.name}</h2>

                <button onClick={() => handleEnlist(bot)} className="btn btn-info">
                  Enlist
                </button>
                <button onClick={() => handleViewDetails(bot)} className="btn btn-secondary">
                  View Details
                </button>
                {showDetails && selectedBot === bot && (
                  <div className="details">
                    <p>ID: {bot.id}</p>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
