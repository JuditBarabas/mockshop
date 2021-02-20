import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import AppReducer from "./appReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  productsInCategory: AppReducer
});

export default rootReducer;
