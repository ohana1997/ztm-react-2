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

const mapStateToProps = (state) => ({
  countItemAdded: state.cart.cartItems.length,
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartItem: () => dispatch(toggleCartItem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
