import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const clickButtonHandler = () => {
    setShowForm(true);
  };
  const cancelHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showForm={showForm}
          onCancel={cancelHandler}
        />
      )}
      {!showForm && (
        <button onClick={clickButtonHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
