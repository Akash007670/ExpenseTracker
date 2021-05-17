import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

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
