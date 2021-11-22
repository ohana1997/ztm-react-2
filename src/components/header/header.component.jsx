import React from "react"
import "./header.style.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/logo/crown.svg"
import { auth } from "../../firebase/firebase.ultils"

const Header = ({ currentUser }) => (
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
          <div className="option ">{currentUser.displayName}</div>
        </div>
      ) : (
        <Link className="option" to="/sign-in-sign-up">
          Sign In
        </Link>
      )}
    </div>
  </div>
)

export default Header
