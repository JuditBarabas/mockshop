import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import AppReducer from "./appReducer";
import CartReducer from "./cartReducer";


const rootReducer = combineReducers({
  products: productsReducer,
  productsInCategory: AppReducer,
  cart: CartReducer
});

export default rootReducer;
