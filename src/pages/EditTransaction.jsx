import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTransaction } from '../store/actions/transactionAction';


export default function EditTransaction() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const transaction = useSelector(state => state.transactionState.transaction)

  console.log(transaction.id, "idnya");

  const [editTransaction, setEditTransaction] = useState({
    transaction: 
      {
        date: "",
        amount: 0,
        category_id: 0,
        payee: ""
      }
  })

  console.log(editTransaction, "edit");

  function submitEditTransaction(e) {
    e.preventDefault()
    dispatch(updateTransaction(transaction.id, editTransaction))
    navigate('/')
  }

  function cancel() {
    navigate(`/`)
  }

  useEffect(() => {
    setEditTransaction(transaction)
  }, [transaction])

  return (
    <div className='container-add'>
      <div className="add-form pads">
        <h2>Edit Transaction</h2>
        <form
          onSubmit={submitEditTransaction}
        >
          <label for="date">Date</label>
          <input 
            required
            type="date" 
            id="date" 
            name="date"
            value={editTransaction.date}
            onChange={(e) => setEditTransaction({
              transaction:
                {
                  date: e.target.value,
                  amount: editTransaction.amount,
                  category_id: editTransaction.category_id,
                  payee: editTransaction.payee
                }
            })}
          />

          <label for="description">Description</label>
          <input 
            required
            type="text" 
            id="description" 
            name="description"
            value={editTransaction.payee}
            onChange={(e) => setEditTransaction({
              transaction:
                {
                  date: editTransaction.date,
                  amount: editTransaction.amount,
                  category_id: editTransaction.category_id,
                  payee: e.target.value
                }
            })}
          />

          <label for="amount">Amount (IDR)</label>
          <input 
            required
            type="number" 
            id="amount" 
            name="itemname"
            value={editTransaction.amount}
            onChange={(e) => setEditTransaction({
              transaction:
                {
                  date: editTransaction.date,
                  amount: e.target.value,
                  category_id: editTransaction.category_id,
                  payee:  editTransaction.payee
                }
            })}
          />

          <label for="type">Type</label>
          <select id="type" name="type"
            required
            value={editTransaction.category_id}
            onChange={(e) => setEditTransaction({
              transaction:
                {
                  date: editTransaction.date,
                  amount: editTransaction.amount,
                  category_id: +e.target.value,
                  payee:  editTransaction.payee
                }
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
