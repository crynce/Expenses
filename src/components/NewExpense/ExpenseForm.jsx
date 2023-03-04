import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [hideForm, setHideForm] = useState(true);

  //Using one state instead of multiple

  const titleChangeHandler = (e) => {
    console.log(enteredTitle);
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    !enteredAmount &&
      !enteredDate &&
      !enteredTitle &&
      setHideForm((prev) => !prev);
    if (enteredAmount && enteredDate && enteredTitle) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      console.log(expenseData);
      props.onSaveExpenseData(expenseData);
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
      setHideForm(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {!hideForm && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2023-12-12"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
      )}
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
