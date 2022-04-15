import React from 'react'

export default function TransactionTable() {
  return (
    <table id='transactions'>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Amount (IDR)</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>14 April 2022</td>
        <td>Jaket Uniqlo</td>
        <td>300000</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
      <tr>
        <td>14 April 2022</td>
        <td>Kaos Uniqlo</td>
        <td>200000</td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </table>
  )
}
