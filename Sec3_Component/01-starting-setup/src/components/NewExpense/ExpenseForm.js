import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // write ^ 3 lines into 1 line
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) => setUserInput({
        ...userInput, //spread operation:copy userInput object's attributes.(not copying whole obj just taking attributes and copying them)
        enteredTitle: event.target.value // then override title
    });

    const amountChangeHandler = (event) => setUserInput({
        ...userInput,
        enteredAmount: event.target.value
    });

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };
    
  return <form>
      <div className="new-expense__controls">
          <div className="new-expense__control">
              <label>Title</label>
              <input type='text' onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
              <label>Amount</label>
              <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
              <label>Date</label>
              <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
          </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
  </form>
};

export default ExpenseForm;
