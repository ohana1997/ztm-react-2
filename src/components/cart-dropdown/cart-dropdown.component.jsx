import React from "react"
import { withRouter } from "react-router"
import "./cart-dropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import CartItemAdded from "../cart-item-added/cart-item-added.component"
import { toggleCartItem } from "../../redux/cart/cart.actions"
const CartDropDown = ({ cartItems, history, dispatch, ...otherProps }) => {
  const handleClickCheckout = () => {
    history.push("/checkout")
    dispatch(toggleCartItem())
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItemAdded key={item.id} item={item} />)
        ) : (
          <span className="empty-msg">Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={handleClickCheckout}>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  }
}

export default withRouter(connect(mapStateToProps)(CartDropDown))
