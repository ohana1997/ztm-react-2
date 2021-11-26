import React from "react"
import "./checkout.style.scss"
import { connect } from "react-redux"
import {
  selectCartITemsTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

const Checkout = ({ total, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header ">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">{`Total: $${total}`}</div>
  </div>
)

const mapStateToProps = (state) => {
  console.log("selectCartItems(state)-", selectCartItems(state))
  return {
    cartItems: selectCartItems(state),
    total: selectCartITemsTotal(state),
  }
}

export default connect(mapStateToProps)(Checkout)
