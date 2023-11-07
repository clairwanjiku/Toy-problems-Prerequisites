import React, { useState, useEffect, useRef } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import NavBar from './components/NavBar';
import SortBar from './components/SortBar'; // Import the SortBar component

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortingOption, setSortingOption] = useState('none'); // State to store the sorting option
  const botCollectionRef = useRef(null); // Create a ref to the bot collection container

  useEffect(() => {
    // Fetch data from your local server and populate the 'bots' state.
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const scrollToBot = (botId) => {
    // Scroll to the bot's card using the ref
    if (botCollectionRef.current) {
      const botCard = botCollectionRef.current.querySelector(`#bot-${botId}`);
      if (botCard) {
        botCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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



const deleteBot = (bot) => {
  // Send a DELETE request to discharge the bot on the server
  fetch(`http://localhost:8001/bots/${bot.id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        // If the request was successful, remove the bot from the frontend
        const updatedArmy = army.filter((b) => b.id !== bot.id);
        setArmy(updatedArmy);
        console.log(`Bot ${bot.name} discharged from service forever.`);
      } else {
        console.error(`Error discharging bot ${bot.name}: ${response.statusText}`);
      }
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

    // Example of how to scroll to the first bot in the search results
    if (bots.length > 0) {
      scrollToBot(bots[0].id);
    }
  };

  const handleSortChange = (option) => {
    setSortingOption(option);
  };

  const sortBots = (botsToSort) => {
    // Implement your sorting logic based on the selected sorting option
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
      <h1 className="text-center m-3 p-4 bg-info text-white">BOT BATTLER</h1>
      <NavBar onSearch={onSearch} scrollToBot={scrollToBot} />
      <SortBar onSortChange={handleSortChange} /> {/* Include the SortBar component */}
      <BotCollection bots={sortedBots} onEnlistBot={enlistBot} ref={botCollectionRef} />
      <YourBotArmy army={army} onReleaseBot={releaseBot} onDischargeBot={deleteBot} />
    </div>
  );
};

export default App;
