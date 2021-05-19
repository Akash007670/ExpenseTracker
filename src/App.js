import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {title : "Car Insurance" , amount : 2369 , date : new Date(2,2,2001)},
    {title : "College Fees" , amount : 65000 , date : new Date(3,3,2003)},
    {title : "House Rent" , amount : 5000 , date : new Date(4,4,2004)},
    {title : "Groceries " , amount : 3000 , date : new Date(4,4,2004)}
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items = {expenses}/>
    </div>
  );
}

export default App;




 