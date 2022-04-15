import { 
  SET_LOADING_BALANCE, 
  SET_ERROR_BALANCE,
  SET_CATEGORIES,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE
} from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  categories: [],
  income: 0,
  expense: 0,
  balance: 0
}

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_BALANCE:
      return { ...state, isLoading: payload }
    case SET_ERROR_BALANCE:
      return { ...state, isError: payload }
    case SET_CATEGORIES:
      return { ...state, categories: payload }
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