import React, { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ( {transactions } ) => {
    const sign = transactions.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={sign == '+'? "plus" : "minus"}>
            {transactions.text}<span>{sign}${Math.abs(transactions.amount)}</span><button className="delete-btn" onClick={()=>deleteTransaction(transactions.id)}>x</button>
        </li> )
}
