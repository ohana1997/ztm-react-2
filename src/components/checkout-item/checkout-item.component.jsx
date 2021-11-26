import React from "react"
import "./checkout-item.style.scss"
import { connect } from "react-redux"
import { removeCartItem } from "../../redux/cart/cart.actions"
const CheckoutItem = ({ cartItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow">&lt;</span>
        {quantity}
        <span className="arrow">&gt;</span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10006;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
