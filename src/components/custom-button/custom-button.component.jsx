import React from "react"
import "./custom-button.style.scss"

const CustomButton = ({ children, isGooleSignIn, ...otherProps }) => {
  console.log("isGooleSignIn-", isGooleSignIn)
  return (
    <button
      className={`${isGooleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
