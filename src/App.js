import { Route, Switch, useRouteMatch, Link, useParams } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
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
      </Switch>
    </div>
  )
}

export default App
