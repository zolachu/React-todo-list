import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2020");

  const filterSelectedHandler = (selection) => {
    setSelected(selection);
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
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
