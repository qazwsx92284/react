import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  // useState() should be inside component
  const [title, setTitle] = useState(props.title); //array destructuring

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> 
       {/* we don't execute function with (). clickHandler() x
       becuase if I add (), js would execute this when this line of code is being parsed. */}
    </Card>
  );
}

export default ExpenseItem;
