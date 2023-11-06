import React from 'react';

const YourBotArmy = ({ army, onReleaseBot, onDischargeBot }) => {
  return (
    <div>
      <h1 className="text-center">MY BOT ARMY</h1>
      <div className="row">
        {army.map((bot) => (
          <div key={bot.id} className="col-4 mb-4">
            <div className="card bg-pink">
            <img src={bot.avatar_url} className="card-img-top w-50 h-10" alt={`Avatar of ${bot.name}`} />
              <div className="card-body">
                <h2 className="card-title">{bot.name}</h2>
                <div className="d-flex justify-content-between">
                  <button onClick={() => onReleaseBot(bot)} className="btn btn-danger">Release</button>
                  <button onClick={() => onDischargeBot(bot)} className="btn btn-warning">Discharge</button>
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

