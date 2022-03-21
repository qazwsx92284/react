import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  // combine the existing expenses(prevExpeses) and newly entered expense
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])
    //^is not really correct. if update state is depending on previous state, should use function to retrieve the lastest state snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* have the form which user can enter new expense and save/deliver the value */}
      <NewExpense onAddExpense = {addExpenseHandler}/>  
      {/* display a list of expenses including prevExpenses and newly entered expense */}
      <Expenses items={expenses}></Expenses> 
    </div>
  );
}

export default App;
