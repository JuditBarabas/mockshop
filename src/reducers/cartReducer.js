import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  itemsInCart: null
}

function CartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemsInCart: {
          ...state.itemsInCart,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export default CartReducer