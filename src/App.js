import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import "./App.css"
import Header from "./components/header/header.component"
import { auth } from "./firebase/firebase.ultils"
import React from "react"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  unsubcriberFromAuth = null
  componentDidMount() {
    this.unsubcriberFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log("user", user)
    })
  }

  componentWillUnmount() {
    this.unsubcriberFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in-sign-up" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}
// return <HomePage />

export default App
