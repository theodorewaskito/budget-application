import { 
  SET_LOADING_BALANCE, 
  SET_ERROR_BALANCE,
  SET_CATEGORIES,
  SET_INCOME,
  SET_EXPENSE,
  SET_BALANCE
} from "../actionType";


const baseUrl = 'https://dev.lunchmoney.app/v1'

export function setLoading(payload) {
  return {
    type: SET_LOADING_BALANCE,
    payload: payload 
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR_BALANCE,
    payload: payload 
  }
}

export function setCategories(payload) {
  return {
    type: SET_CATEGORIES,
    payload: payload 
  }
}

export function getCategories() {
  return function(dispatch) {
    dispatch(setLoading(true))
    fetch(`${baseUrl}/categories`, {
      headers: {
        'Authorization': 'Bearer f5564e181e82c7bda056c76047c26e56f9f5b6df3c84632fa6'
      }
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data); 
        dispatch(setCategories(data))
      })
      .catch((err) => {
        dispatch(setError(err))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }
}