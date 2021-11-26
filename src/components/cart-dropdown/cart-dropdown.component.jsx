import React from "react"
import "./cart-dropdown.style.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import CartItemAdded from "../cart-item-added/cart-item-added.component"
const CartDropDown = ({ cartItems }) => {
  console.log("cartItems--", cartItems)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemAdded key={item.id} item={item} />
        ))}
      </div>

      <CustomButton>Checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  }
}
export default connect(mapStateToProps)(CartDropDown)
