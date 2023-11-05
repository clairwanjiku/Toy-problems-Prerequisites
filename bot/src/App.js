import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    // Fetch data from your local server and populate the 'bots' state.
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    // Add a bot to the army
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    // Remove a bot from the army
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} onEnlistBot={enlistBot} />
      <YourBotArmy army={army} onReleaseBot={releaseBot} />
    </div>
  );
};

export default App;
