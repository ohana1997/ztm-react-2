import React from "react"
import "./custom-button.style.scss"

const CustomButton = ({ children, isGooleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${
        inverted ? "inverted" : isGooleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
