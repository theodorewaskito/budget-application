import React from 'react'
import { useNavigate } from "react-router-dom";


export default function AddIncome() {
  const navigate = useNavigate()

  function cancel() {
    navigate(`/`)
  }

  return (
    <div className='container-add'>
      <div className="add-form pads">
        <h2>Add Income (+)</h2>
        <form>
          <label for="date">Date</label>
          <input type="date" id="date" name="date"/>
          <label for="description">Description</label>
          <input type="text" id="description" name="description"/>
          <label for="amount">Amount (IDR)</label>
          <input type="number" id="amount" name="itemname"/>
        
          <div className="buttons">
            <button 
              className="cancel-button" 
              onClick={() => cancel()}
            > Cancel </button>
            <input type="submit" value="Add Transaction"/>
          </div>
        </form>
      </div>
    </div>
  )
}
