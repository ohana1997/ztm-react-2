import { Route, Switch, useRouteMatch, Link, useParams } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import "./App.css"
import Header from "./components/header/header.component"

function App() {
  // return <HomePage />
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in-sign-up" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
