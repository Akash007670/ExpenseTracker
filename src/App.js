import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title : "Car Insurance" , amount : 2369 , date : new Date(2,2,2001)},
    {title : "College Fees" , amount : 65000 , date : new Date(3,3,2003)},
    {title : "House Rent" , amount : 5000 , date : new Date(4,4,2004)}
  ];
  return (
    <div className="App">
      <Navbar />
      <ExpenseItem amount = {expenses[0].amount} title = {expenses[0].title} date = {expenses[0].date} />     
      <ExpenseItem amount = {expenses[1].amount} title = {expenses[1].title} date = {expenses[1].date} />     
      <ExpenseItem amount = {expenses[2].amount} title = {expenses[2].title} date = {expenses[2].date} />     
    </div>
  );
}

export default App;




 