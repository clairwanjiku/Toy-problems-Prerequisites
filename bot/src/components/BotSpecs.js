import React from 'react';

const BotSpecs = ({ bot, onEnlistBot }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={() => onEnlistBot(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
