import cartActionTypes from "./cart.types"

const INITIAL_STATE = {
  isToggle: false,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case cartActionTypes.TOGGLE_CART_ITEM:
      console.log("2")
      return {
        ...state,
        isToggle: !state.isToggle,
      }
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, actions.payload],
      }
    default:
      return state
  }
}

export default cartReducer
