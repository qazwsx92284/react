import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('clicked!!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> 
       {/* we don't execute function with (). clickHandler() x
       becuase if I add (), js would execute this when this line of code is being parsed. */}
    </Card>
  );
}

export default ExpenseItem;
