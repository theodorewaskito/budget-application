import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTransaction, getTransactionById } from '../store/actions/transactionAction';
import { IoTrash, IoCreate } from "react-icons/io5";


export default function TransactionTable({transactions}) {
  console.log(transactions, 'test');
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  let dollarIndonesiaLocale = Intl.NumberFormat('en-ID');

  function delTransaction(id) {
    dispatch(deleteTransaction(id))
  }

  function editTransaction(id) {
    dispatch(getTransactionById(id))
    navigate(`/edit-transaction`)
  }

  return (
    <table id='transactions'>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount (IDR)</th>
        <th>Action</th>
      </tr>
      {
        transactions?.transactions?.map((transaction) => {
          return (
            <tr>
              <td>{transaction.date}</td>
              <td>{transaction.payee}</td>
              <td>Rp {dollarIndonesiaLocale.format(transaction.amount)}</td>
              <td>
                <button
                  id="delete-button"
                  onClick={() => delTransaction(transaction.id)}
                >
                  <IoTrash/>
                </button>
                <button
                  id="edit-button"
                  onClick={() => editTransaction(transaction.id)}
                >
                  <IoCreate/>
                </button>
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}
