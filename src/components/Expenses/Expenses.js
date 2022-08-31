import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2020");

  const filterSelectedHandler = (selection) => {
    setSelected(selection);
    console.log(selected);
  };
  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(selected)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selected}
          onFilterSelected={filterSelectedHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
