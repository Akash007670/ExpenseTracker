import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [click, setClick] = useState(false);

  const onClickHandler = () => {
    setClick(true);
  };

  const stopOnClcikHandler = () => {
      setClick(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!click && <button onClick={onClickHandler}>Add New Expense</button>}
      {click && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler = {stopOnClcikHandler} />)}
    </div>
  );
};

export default NewExpense;
