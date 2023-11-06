import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import NavBar from './components/NavBar';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

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

  const dischargeBot = (bot) => {
    // Send a DELETE request to discharge the bot on the server and remove it from the army
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        console.log(`Bot ${bot.name} discharged from service forever.`);
        const updatedArmy = army.filter((b) => b.id !== bot.id);
        setArmy(updatedArmy);
      })
      .catch((error) => {
        console.error(`Error discharging bot ${bot.name}: ${error}`);
      });
  };

  const onSearch = (searchTerm) => {
    // Implement your search logic here
    // You can use the searchTerm to filter the 'bots' data
    // and update the 'bots' state accordingly
    // Example: const filteredBots = bots.filter((bot) => bot.name.includes(searchTerm));
    // setBots(filteredBots);
  };

  return (
    <div>
      <h1 className="text-center m-3 p-4">BOT BATTLER</h1>
      <NavBar bots={BotCollection} /> {/* Pass the 'botData' array as a prop to the NavBar component */}
      <BotCollection bots={bots} onEnlistBot={enlistBot} />
      <YourBotArmy army={army} onReleaseBot={releaseBot} onDischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
