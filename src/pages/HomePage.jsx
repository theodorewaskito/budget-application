import React from 'react'
import { useNavigate } from "react-router-dom";
import TransactionTable from '../components/TransactionTable'

export default function HomePage() {
  const navigate = useNavigate()

  function addIncome() {
    navigate(`/add-income`)
  }

  function addExpense() {
    navigate(`/add-expense`)
  }

  return (
      <div className='pads'>

        <div className="budget">

          <div class="card">
            <div class="container">
              <div id="income-text">
                <h4><b>INCOME</b></h4> 
              </div>
              <p>Rp 5000000</p> 
            </div>
            <hr class="solid"/>
            <div class="container">
              <div id="expense-text">
                <h4><b>EXPENSE</b></h4> 
              </div>
              <p>- Rp 2000000</p> 
            </div>
            <hr class="solid"/>
            <div class="container">
              <div id="balance-text">
                <h4><b>BALANCE</b></h4> 
              </div>
              <p>Rp 3000000</p> 
            </div>
          </div>
        </div>

        <div className='button-add'>
          
          <button 
            id="add-income" 
            onClick={() => addIncome()}
          >
            Add Income
          </button>

          <button 
            id="add-expense" 
            onClick={() => addExpense()}
          >
            Add Expense
          </button>


        </div>

        <TransactionTable/>

    </div>
  )
}
