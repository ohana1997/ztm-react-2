import React from "react"
import "./cart-dropdown.style.scss"

import CustomButton from "../custom-button/custom-button.component"

const CartDropDown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Checkout</CustomButton>
  </div>
)

export default CartDropDown
