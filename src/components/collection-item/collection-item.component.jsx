import React from "react"
import "./collection-item.style.scss"

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ background: `url(${imageUrl})` }}></div>
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
  </div>
)

export default CollectionItem
