import React from 'react';

const SortBar = ({ onSort, onFilter }) => {
  return (
    <div>
      <button onClick={() => onSort('health')}>Sort by Health</button>
      <button onClick={() => onSort('damage')}>Sort by Damage</button>
      <button onClick={() => onSort('armor')}>Sort by Armor</button>
      <button onClick={() => onFilter('Support')}>Filter Support</button>
      <button onClick={() => onFilter('Medic')}>Filter Medic</button>
      {/* Add more filter buttons for other classes */}
    </div>
  );
};

export default SortBar;
