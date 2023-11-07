import React, { useState, useEffect, useRef } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortingOption, setSortingOption] = useState('none');
  const botCollectionRef = useRef(null);
  const [searchedBot, setSearchedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);



  const handleSortChange = (option) => {
    setSortingOption(option);
  };

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    // Filter out the bot to be released and update the army state
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };
  

  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Server Response:', response); // Add this line
        if (response.ok) {
          const updatedArmy = army.filter((b) => b.id !== bot.id);
          setArmy(updatedArmy);
          console.log(`Bot ${bot.name} discharged from service forever.`);
          if (searchedBot && bot.id === searchedBot.id) {
            setSearchedBot(null);
          }
        } else {
          console.error(`Error discharging bot ${bot.name}: ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error(`Error discharging bot ${bot.name}: ${error}`);
      });
  };

  const sortBots = (botsToSort) => {
    switch (sortingOption) {
      case 'health':
        return botsToSort.slice().sort((a, b) => a.health - b.health);
      case 'damage':
        return botsToSort.slice().sort((a, b) => a.damage - b.damage);
      case 'armor':
        return botsToSort.slice().sort((a, b) => a.armor - b.armor);
      default:
        return botsToSort;
    }
  };

  const sortedBots = sortBots(bots);

  return (
    <div>
      <h1 className="text-center m-3 p-4 bg-info">BOT BATTLER</h1>
      
      <SortBar onSortChange={handleSortChange} />
      {searchedBot ? (
        <div>
          <h2 className="text-center">Searched Bot</h2>
          <BotCollection bots={[searchedBot]} onEnlistBot={enlistBot} />
        </div>
      ) : (
        <BotCollection bots={sortedBots} onEnlistBot={enlistBot} onBotDelete={deleteBot} ref={botCollectionRef} />
      )}
      <YourBotArmy army={army} onReleaseBot={releaseBot} onDischargeBot={deleteBot} />

    </div>
  );
};

export default App;
