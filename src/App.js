import { Route, Switch, useRouteMatch, Link, useParams } from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"

function App() {
  // return <HomePage />
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
