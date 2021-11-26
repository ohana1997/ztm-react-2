import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg"
import "./cart-item.style.scss"
import { connect } from "react-redux"
import { toggleCartItem } from "../../redux/cart/cart.actions"
const CartIcon = ({ toggleCartItem, countItemAdded }) => {
  return (
    <div className="cart-icon" onClick={toggleCartItem}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItemAdded}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  const countItem = state.cart.cartItems.reduce((pre, cur) => {
    console.log("object", pre, cur)
    return pre + cur.quantity
  }, 0)
  return {
    countItemAdded: countItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartItem: () => dispatch(toggleCartItem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
