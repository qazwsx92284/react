import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const onSaveEditingStatus = (enteredEditStatus) => {
        setIsEditing(false);
    }

    return (
    <div className = "new-expense">
        {!isEditing &&<button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} cancelEditing={onSaveEditingStatus}/>}
    </div>
    );
};

export default NewExpense;
