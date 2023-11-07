import React from 'react';

const YourBotArmy = ({ army, onReleaseBot, onDischargeBot }) => {
  const releaseBot = (bot) => {
    onReleaseBot(bot);
  };

  const dischargeBot = (bot) => {
    console.log(`Attempting to discharge bot: ${bot.name}`);

    // Make an API request to delete the bot from the server
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Response status:', response.status);
        if (response.ok) {
          // If the server deletion is successful, call the onDischargeBot callback
          onDischargeBot(bot);
          console.log(`Bot ${bot.name} discharged from service forever.`);
        } else {
          console.error(`Error discharging bot ${bot.name}: ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error(`Error discharging bot ${bot.name}: ${error}`);
      });
  };

  return (
    <div>
      <h1 className="text-center">MY BOT ARMY</h1>
      <div className="row">
        {army.map((bot) => (
          <div key={bot.id} className="col-2 mb-3"> {/* Adjust the col-3 for smaller card width */}
            <div className="card bg-indigo">
              <img
                src={bot.avatar_url}
                className="card-img-" /* Remove width and height to maintain the image's aspect ratio */
                alt={`Avatar of ${bot.name}`}
                onClick={() => releaseBot(bot)}
              />
              <div className="card-body">
                <h2 className="card-title">{bot.name}</h2>
                <div className="d-flex justify-content-between">
                  <button onClick={() => dischargeBot(bot)} className="btn btn-danger">X</button>
                  <button onClick={() => onReleaseBot(bot)} className="btn btn-info">Release</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
