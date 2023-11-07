import React, { useState } from 'react';

const SortBar = ({ onSortChange }) => {
  const [sortingOption, setSortingOption] = useState(null);

  const handleSortChange = (option) => {
    // Toggle the sorting order if the same option is selected
    if (option === sortingOption) {
      onSortChange(option, sortingOption.startsWith('-') ? 'asc' : 'desc');
    } else {
      onSortChange(option, 'asc');
    }
    setSortingOption(option);
  };

  return (
    <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
      <button
        className={`btn btn-info ${sortingOption === 'health' ? 'active' : ''}`}
        onClick={() => handleSortChange('health')}
        style={{ margin: '5px' }}
      >
        Sort by Health
      </button>
      <button
        className={`btn btn-info ${sortingOption === 'damage' ? 'active' : ''}`}
        onClick={() => handleSortChange('damage')}
        style={{ margin: '5px' }}
      >
        Sort by Damage
      </button>
      <button
        className={`btn btn-info ${sortingOption === 'armor' ? 'active' : ''}`}
        onClick={() => handleSortChange('armor')}
        style={{ margin: '5px' }}
      >
        Sort by Armor
      </button>
    </div>
  );
};

export default SortBar;
