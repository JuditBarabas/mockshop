import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";
import { TOGGLE_CART_TAB } from "../actions/cartActions";

const initialState = {
  itemsInCart: {},
  isCartDisplay: false
}

function CartReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:

      const {productId, size, quantity} = action.payload;
      const cartItemKey = `${productId}${size ? `_${size}` : ''}`;
      const qty = quantity + (state.itemsInCart[cartItemKey] ? state.itemsInCart[cartItemKey] : 0);

      return {
        ...state,
        itemsInCart: {
          ...state.itemsInCart,
          [cartItemKey]: qty
        }
      };
      
    case TOGGLE_CART_TAB:
      return {
        ...state,
        isCartDisplay: !state.isCartDisplay
      };

    default:
      return state;
  }
}

export default CartReducer