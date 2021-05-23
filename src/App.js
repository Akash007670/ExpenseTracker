import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const dummy_expenses = [];

  const [expenses , setExpenses ] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense ,...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items = {expenses}/>
    </div>
  );
}

export default App;




 