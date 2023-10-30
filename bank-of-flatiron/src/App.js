import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable'; 

function App() {
  // Define your state to store transaction data
  const [transactions, setTransactions] = useState([]);

  // Simulated API call to fetch transaction data
  useEffect(() => {
    // You can replace this with an actual API call
    // For now, let's use the sample data you provided
    const fetchData = async () => {
      try {
        const response = await fetch('data.json'); // Replace with your JSON data file path
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Transaction Table</h1>
      <TransactionTable transactions={transactions} />
      {/* You can add your form, search bar, and other components here */}
    </div>
  );
}

export default App;
