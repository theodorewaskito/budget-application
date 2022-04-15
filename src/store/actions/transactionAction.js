import { 
  SET_LOADING_TRANSACTION, 
  SET_ERROR_TRANSACTION,
  SET_TRANSACTIONS,
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
    let income = getState().transactionState.income
    let expense = getState().transactionState.expense
    let balance = getState().transactionState.balance
    
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
    fetch(`${baseUrl}/transactions`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Authorization': `Bearer ${token}`
      }
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

// export function getPostId(id) {
//   return function(dispatch) {
//     dispatch(setLoading(true))
//     fetch(`${baseUrl}/posts/${id}`) 
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         dispatch(setPost(data))
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }

// export function getComments(id) {
//   return function(dispatch) {
//     dispatch(setLoading(true))
//     fetch(`${baseUrl}/posts/${id}/comments`) 
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         dispatch(setComments(data))
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }

// export function getCommentId(id) {
//   return function(dispatch) {
//     dispatch(setLoading(true))
//     fetch(`${baseUrl}/comments/${id}`) 
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         dispatch(setComment(data))
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }

// export function createComment(postId, payload) {
//   return function(dispatch, getState) {
//     dispatch(setLoading(true))
//     payload = {
//       ...payload,
//       post_id: postId,
//       name: getState().userState.user.data.name,
//       email: getState().userState.user.data.email
//     }
//     fetch(`${baseUrl}/posts/${postId}/comments`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 39127a3015fdf079ef0ba0ea664eecc7ef0f43368d7d7a5bc42df1f77f687878'
//       },
//     }) 
//       .then(res => res.json())
//       .then(data => {
//         console.log(data); 
//         dispatch(setComment(data))
//         dispatch(getComments(postId))
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }

// export function deleteComment(commentId, postId) {
//   return function(dispatch, getState) {
//     dispatch(setLoading(true))
//     // console.log(getState());
//     fetch(`${baseUrl}/comments/${commentId}`, {
//       method: "DELETE",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 39127a3015fdf079ef0ba0ea664eecc7ef0f43368d7d7a5bc42df1f77f687878'
//       }
//     }) 
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Deleted!',
//           text: `Comment has been deleted`,
//           showConfirmButton: false
//         })
//         // const newTodo = getState().todoState.todos.data.filter(todo => todo.id !== todoId)
//         // console.log(newTodo);  
//         // dispatch(setTodos(newTodo))
//         dispatch(getComments(postId))
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }

// export function updateComment(payload, commentId) {
//   return function(dispatch, getState) {
//     // console.log(todoId);
//     // console.log(payload);
//     dispatch(setLoading(true))
//     fetch(`${baseUrl}/comments/${commentId}`, {
//       method: "PUT",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 39127a3015fdf079ef0ba0ea664eecc7ef0f43368d7d7a5bc42df1f77f687878'
//       },
//       body: JSON.stringify(payload)
//     }) 
//       .then(res => res.json())
//       .then((data) => {
//         console.log(data);
//         dispatch(setComment(data));
//       })
//       .catch((err) => {
//         dispatch(setError(err))
//       })
//       .finally(() => {
//         dispatch(setLoading(false))
//       })
//   }
// }