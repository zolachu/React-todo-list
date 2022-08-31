import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2020");

  const filterSelectedHandler = (selection) => {
    setSelected(selection);
    console.log(selected);
  };
  const filteredArray = props.items.filter(
    (item) => item.date.getFullYear() === Number(selected)
  );

  let expensesValue = <p>No expenses found.</p>;
  if (filteredArray.length > 0)
    expensesValue = filteredArray.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selected}
          onFilterSelected={filterSelectedHandler}
        />
        {expensesValue}
      </Card>
    </div>
  );
};

export default Expenses;
