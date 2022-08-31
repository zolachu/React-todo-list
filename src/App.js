import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      date: new Date(2020, 9, 0),
      amount: 294,
      title: "Car Insurance",
    },
    {
      id: "e2",
      date: new Date(2020, 3, 0),
      amount: 294,
      title: "School courses",
    },
    {
      id: "e3",
      date: new Date(2021, 5, 2),
      amount: 100,
      title: "Dental Insurance",
    },
    {
      id: "e4",
      date: new Date(2019, 3, 17),
      amount: 294,
      title: "Food Budget",
    },
  ];

  const [expenses, setCurrentExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setCurrentExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
