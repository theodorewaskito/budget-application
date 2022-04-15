import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import categoryReducer from "./categoryReducer";

const reducer = combineReducers({
  transactionState: transactionReducer,
  categoryState: categoryReducer,
});

export default reducer;
