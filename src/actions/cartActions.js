export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CART_TAB = "TOGGLE_CART_TAB";

export const addToCart = (productId, size, quantity) => ({
  type: ADD_TO_CART,
  payload: {productId, size, quantity}
})

export const removeFromCart = (cartItemID) => ({
  type: REMOVE_FROM_CART,
  payload: cartItemID
})

export const toggleCartTab = () => ({
  type: TOGGLE_CART_TAB
})