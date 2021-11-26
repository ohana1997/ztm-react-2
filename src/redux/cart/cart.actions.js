import cartActionTypes from "./cart.types"

export const toggleCartItem = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_ITEM,
  }
}

export const addCartItem = (item) => {
  return {
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item,
  }
}

export const removeCartItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item,
  }
}
