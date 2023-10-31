import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import AddTransaction from './components/AddTransaction';

function App() {
  // State to store transactions
  const [transactions, setTransactions] = useState([]);

  // Fetch transaction data from your local server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/transactions'); 
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Add a new transaction to the state
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Transaction Table</h1>
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
