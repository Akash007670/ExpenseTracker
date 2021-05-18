import React , {useState} from 'react'
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title , setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
        console.log(title);
    }
    return (
        <Card className = "expense-items">
            <ExpenseDate date = {props.date}/>
           <div className = "item-description">
               <h3 >{title}</h3>
               <div className = "item-price">Rs.{props.amount}</div>
           </div>
           <button onClick = {clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;
