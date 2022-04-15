import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <ul>
        <li><a class="active" href="/">WALLET+</a></li>
        <li><a href="/add-income">Add Income</a></li>
        <li><a href="/add-expense">Add Expenses</a></li>
        {/* <li><a href="#about">About</a></li> */}
      </ul>
    </div>
  )
}
