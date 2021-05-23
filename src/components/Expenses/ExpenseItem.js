import React from 'react'
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <Card className = "expense-items">
            <ExpenseDate date = {props.date}/>
           <div className = "item-description">
               <h3 >{props.title}</h3>
               <div className = "item-price">Rs.{props.amount}</div>
           </div>
        </Card>
    )
}

export default ExpenseItem;
