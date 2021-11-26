import { createSelector } from "reselect"

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartITemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((preVal, curVal) => {
      return preVal + curVal.quantity
    }, 0)
  }
)

export const selectCartITemsTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((preVal, curVal) => {
      return preVal + curVal.quantity * curVal.price
    }, 0)
  }
)
