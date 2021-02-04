import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  productsInCategory: AppReducer
});

export default rootReducer;
