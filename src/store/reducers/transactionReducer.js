import { 
  SET_LOADING_TRANSACTION, 
  SET_ERROR_TRANSACTION,
  SET_TRANSACTIONS,
  SET_LOADING_BALANCE, 
  SET_ERROR_BALANCE,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE
} from "../actionType";

const initialState = {
  isLoadingTransaction: false,
  isErrorTransaction: false,
  transactions: [],
  isLoadingBalance: false,
  isErrorBalance: false,
  income: 0,
  expense: 0,
  balance: 0
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_TRANSACTION:
      return { ...state, isLoadingTransaction: payload }
    case SET_ERROR_TRANSACTION:
      return { ...state, isErrorTransaction: payload }
    case SET_TRANSACTIONS:
      return { ...state, transactions: payload }
    case SET_LOADING_BALANCE:
      return { ...state, isLoadingBalance: payload }
    case SET_ERROR_BALANCE:
      return { ...state, isErrorBalance: payload }
    case SET_INCOME:
      return { ...state, income: payload }
    case SET_EXPENSE:
      return { ...state, expense: payload }
    case SET_BALANCE:
      return { ...state, balance: payload }
    default:
      return state
  }
}

export default reducer