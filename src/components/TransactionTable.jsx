import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from '../store/actions/transactionAction';


export default function TransactionTable({transactions}) {
  console.log(transactions, 'test');
  const dispatch = useDispatch()

  let dollarIndonesiaLocale = Intl.NumberFormat('en-ID');

  function delTransaction(id) {
    dispatch(deleteTransaction(id))
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
                  onClick={() => delTransaction(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}
