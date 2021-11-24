import React from "react"
import "./header.style.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/logo/crown.svg"
import { auth } from "../../firebase/firebase.ultils"
import CartIcon from "../cart-item/cart-item.component"
import CartDropDown from "../cart-dropdown/cart-dropdown.component"
import { connect } from "react-redux"
const Header = ({ currentUser, isToggle, cartItems }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <div className="sign-in-name">
            <div className="option" onClick={() => auth.signOut()}>
              Sign Out
            </div>
            <div className="option display-name">{currentUser.displayName}</div>
          </div>
        ) : (
          <Link className="option" to="/sign-in-sign-up">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {isToggle && <CartDropDown />}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("3")
  return {
    isToggle: state.cart.isToggle,
    cartItems: state.cart.cartItems,
  }
}

export default connect(mapStateToProps, null)(Header)
