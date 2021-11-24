import React from "react"
import "./collection-item.style.scss"
import CustomButton from "../custom-button/custom-button.component"
import { connect } from "react-redux"
import { addCartItem } from "../../redux/cart/cart.actions"

const CollectionItem = ({ item, addCartItemFromProps }) => {
  const { name, imageUrl, price } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ background: `url(${imageUrl})` }}></div>

      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton onClick={() => addCartItemFromProps(item)} inverted={true}>
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCartItemFromProps: (item) => dispatch(addCartItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem)
