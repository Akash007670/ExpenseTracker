import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "./Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangehandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} /> 
      </Card>
    </div>
  );
}

export default Expenses;
