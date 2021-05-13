import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    
    return (
        <div className = "expense-items">
            <ExpenseDate date = {props.date}/>
           <div className = "item-description">
               <h3 >{props.title}</h3>
               <div className = "item-price">Rs.{props.amount}</div>
           </div>
        </div>
    )
}

export default ExpenseItem;
