import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg"
import "./cart-item.style.scss"
import { connect } from "react-redux"
import { toggleCartItem } from "../../redux/cart/cart.actions"
import { selectCartITemsCount } from "../../redux/cart/cart.selector"
const CartIcon = ({
  toggleCartItem,
  countItemAdded,
  ...otherPropsCartIcon
}) => {
  return (
    <div className="cart-icon" onClick={toggleCartItem}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItemAdded}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    countItemAdded: selectCartITemsCount(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartItem: () => dispatch(toggleCartItem()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
