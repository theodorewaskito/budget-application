import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTransactions } from '../store/actions/transactionAction';
import { getCategories } from '../store/actions/categoryAction';
import TransactionTable from '../components/TransactionTable'

export default function HomePage() {
  const navigate = useNavigate() 
  const dispatch = useDispatch()

  const transactions = useSelector(state => state.transactionState.transactions)
  const income = useSelector(state => state.transactionState.income)
  const expense = useSelector(state => state.transactionState.expense)
  const balance = useSelector(state => state.transactionState.balance)
  const loading = useSelector(state => state.transactionState.isLoading)
  const error = useSelector(state => state.transactionState.isError)  

  console.log(transactions, 'homepage');
  console.log(income, 'homepage income');
  console.log(balance, 'homepage balance');

  function addTransaction() {
    navigate(`/add-transaction`)
  }

  // function addExpense() {
  //   navigate(`/add-expense`)
  // }

  useEffect(() => {
    dispatch(getTransactions())
    dispatch(getCategories())
  }, [])

  return (
      <div className='pads'>

        <div className="budget">

          <div class="card">
            <div class="container">
              <div id="income-text">
                <h4><b>INCOME</b></h4> 
              </div>
              <p>Rp {income}</p> 
            </div>
            <hr class="solid"/>
            <div class="container">
              <div id="expense-text">
                <h4><b>EXPENSE</b></h4> 
              </div>
              <p>Rp -{expense}</p> 
            </div>
            <hr class="solid"/>
            <div class="container">
              <div id="balance-text">
                <h4><b>BALANCE</b></h4> 
              </div>
              <p>Rp {balance}</p> 
            </div>
          </div>
        </div>

        <div className='button-add'>
          
          <button 
            id="add-transaction" 
            onClick={() => addTransaction()}
          >
            Add Transaction
          </button>

        </div>

        <TransactionTable
          transactions={transactions}
        />

    </div>
  )
}
