import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // write ^ 3 lines into 1 line
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // }); this sometimes not working properly, state might be outdated.
    // setUserInput((previousStateSnapShot) => {
    //     return {...previousStateSnapShot, enteredTitle: event.target.value}
    //     //this approach, react gurantee that (previousStateSnapShot) will always the latest state snapshot
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
      event.preventDefault(); // prevent refresh reload 새로고침방지. 폼에 정보 저장하고 내가 메뉴얼리 작동하게끔.

      const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
      };
      console.log(expenseData);
      // 다시 empty String을 세팅해 줌으로써 새로고침 효과를 줄 수 있다. 다시 인풋박스들을 빈칸으로(처음상태) 만들어준다. 
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value ={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
