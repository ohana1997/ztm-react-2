import { Route, Switch, Redirect } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import "./App.css"
import Header from "./components/header/header.component"
import { auth } from "./firebase/firebase.ultils"
import React from "react"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.actions"
class App extends React.Component {
  unsubcriberFromAuth = null
  componentDidMount() {
    this.unsubcriberFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }

  componentWillUnmount() {
    this.unsubcriberFromAuth()
  }

  renderCompoent = () => {
    this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in-sign-up"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    )
  }
}
// return <HomePage />

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  }
}

const mapDispatchToProps = (dispathch) => {
  return { setCurrentUser: (user) => dispathch(setCurrentUser(user)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
