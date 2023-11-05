import React from 'react';

const BotCollection = ({ bots, onEnlistBot }) => {
  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h2>{bot.name}</h2>
          <button onClick={() => onEnlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
