import { 
  SET_LOADING_TRANSACTION, 
  SET_ERROR_TRANSACTION,
  SET_TRANSACTIONS,
  SET_TRANSACTION,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE
} from "../actionType";


const baseUrl = 'https://dev.lunchmoney.app/v1'
const token = 'f5564e181e82c7bda056c76047c26e56f9f5b6df3c84632fa6'

export function setLoading(payload) {
  return {
    type: SET_LOADING_TRANSACTION,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR_TRANSACTION,
    payload: payload 
  }
}

export function setTransactions(payload) {
  return {
    type: SET_TRANSACTIONS,
    payload: payload 
  }
}

export function setTransaction(payload) {
  return {
    type: SET_TRANSACTION,
    payload: payload 
  }
}

export function setIncome(payload) {
  return {
    type: SET_INCOME,
    payload: payload 
  }
}

export function setExpense(payload) {
  return {
    type: SET_EXPENSE,
    payload: payload 
  }
}

export function setBalance(payload) {
  return {
    type: SET_BALANCE,
    payload: payload 
  }
}

export function getTransactions() {
  return function(dispatch, getState) {
    // let income = getState().transactionState.income
    // let expense = getState().transactionState.expense
    // let balance = getState().transactionState.balance
    
    // console.log(payload.email);
    dispatch(setLoading(true))
    fetch(`${baseUrl}/transactions`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setTransactions(data))

        let income = 0
        let expense = 0
        let balance = 0

        for (let i = 0; i < data.transactions.length; i++) {
          if (data.transactions[i].category_id === 327116) {
            income += Number(data.transactions[i].amount)
          } else if (data.transactions[i].category_id === 327117) {
            expense += Number(data.transactions[i].amount)
          }
        }

        balance = income - expense

        console.log(income, "income");
        console.log(expense, "expense");
        console.log(balance, "balance");
        dispatch(setIncome(income))
        dispatch(setExpense(expense))
        dispatch(setBalance(balance))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function getTransactionById(id) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/transactions/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setTransaction(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}


export function deleteTransaction(transactionId) {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/transactions/group/${transactionId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }) 
      .then((data) => {
        console.log(data);
        dispatch(getTransactions())
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function createTransaction(payload) {
  return function(dispatch) {
    dispatch(setLoading(true))
    console.log(payload);
    fetch(`${baseUrl}/transactions`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }) 
      .then(() => {
        dispatch(getTransactions())
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}

export function updateTransaction(id, payload) {
  return function(dispatch) {
    dispatch(setLoading(true))
    console.log(payload);
    fetch(`${baseUrl}/transactions/${id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }) 
      .then(() => {
        dispatch(getTransactions())
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}
