import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2020, 9, 0),
      amount: 294,
      title: "Car Insurance",
    },
    {
      id: "e2",
      date: new Date(2018, 3, 0),
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
      date: new Date(2017, 3, 17),
      amount: 294,
      title: "Food Budget",
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
