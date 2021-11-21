import React from "react"
import "./custom-button.style.scss"

const CustomButton = ({ children, ...otherProps }) => {
  console.log("ChildRen", children)
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
