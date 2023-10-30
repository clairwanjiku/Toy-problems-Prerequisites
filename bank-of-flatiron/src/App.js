import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import AddTransaction from './components/AddTransaction';


function App() {
  // Define your state to store transaction data
  const [transactions, setTransactions] = useState([]);

  // Simulated API call to fetch transaction data
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

  // Function to add a new transaction to the table
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Transaction Table</h1>
      <AddTransaction onAddTransaction={addTransaction} /> {/* Render AddTransaction component */}
      <TransactionTable transactions={transactions} /> {/* Render TransactionTable component */}
    </div>
  );
}

export default App;

