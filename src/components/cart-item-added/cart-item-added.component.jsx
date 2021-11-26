import React from "react"
import "./cart-item-added.style.scss"

const CartItemAdded = ({ item: { imageUrl, name, quantity, price } }) => {
  return (
    <div className="cart-item">
      {/* <div className="img" style={{ background: `url(${imageUrl})` }}></div> */}
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="quantity">
          {`${quantity}x$${price}=$${quantity * price}`}
        </div>
      </div>
    </div>
  )
}

export default CartItemAdded
