import React from 'react';

const YourBotArmy = ({ army, onReleaseBot }) => {
  return (
    <div>
      {army.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <button onClick={() => onReleaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
