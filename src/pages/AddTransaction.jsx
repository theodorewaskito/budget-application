import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTransaction } from '../store/actions/transactionAction';


export default function AddTransaction() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [addTransaction, setAddTransaction] = useState({
    transactions: [
      {
        date: "",
        amount: 0,
        category_id: 0,
        payee: ""
      }
    ]
  })

  console.log(addTransaction, "add");

  function submitAddTransaction(e) {
    e.preventDefault()
    dispatch(createTransaction(addTransaction))
    navigate('/')
  }

  function cancel() {
    navigate(`/`)
  }

  return (
    <div className='container-add'>
      <div className="add-form pads">
        <h2>Add Transaction</h2>
        <form
          onSubmit={submitAddTransaction}
        >
          <label for="date">Date</label>
          <input 
            required
            type="date" 
            id="date" 
            name="date"
            value={addTransaction.transactions[0].date}
            onChange={(e) => setAddTransaction({
              transactions: [
                {
                  date: e.target.value,
                  amount: addTransaction.transactions[0].amount,
                  category_id: addTransaction.transactions[0].category_id,
                  payee: addTransaction.transactions[0].payee
                }
              ]
            })}
          />

          <label for="description">Description</label>
          <input 
            required
            type="text" 
            id="description" 
            name="description"
            value={addTransaction.transactions[0].payee}
            onChange={(e) => setAddTransaction({
              transactions: [
                {
                  date: addTransaction.transactions[0].date,
                  amount: addTransaction.transactions[0].amount,
                  category_id: addTransaction.transactions[0].category_id,
                  payee: e.target.value
                }
              ]
            })}
          />

          <label for="amount">Amount (IDR)</label>
          <input 
            required
            type="number" 
            id="amount" 
            name="itemname"
            value={addTransaction.transactions[0].amount}
            onChange={(e) => setAddTransaction({
              transactions: [
                {
                  date: addTransaction.transactions[0].date,
                  amount: e.target.value,
                  category_id: addTransaction.transactions[0].category_id,
                  payee:  addTransaction.transactions[0].payee
                }
              ]
            })}
          />

          <label for="type">Type</label>
          <select id="type" name="type"
            required
            value={addTransaction.transactions[0].category_id}
            onChange={(e) => setAddTransaction({
              transactions: [
                {
                  date: addTransaction.transactions[0].date,
                  amount: addTransaction.transactions[0].amount,
                  category_id: +e.target.value,
                  payee:  addTransaction.transactions[0].payee
                }
              ]
            })}
          >
            <option value="327117">Expense (-)</option>
            <option value="327116">Income (+)</option>
          </select>
        
          <div className="buttons">
            <button 
              className="cancel-button" 
              onClick={() => cancel()}
            > Cancel </button>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
