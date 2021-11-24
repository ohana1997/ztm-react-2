import { combineReducers } from "redux"
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.recuder"
const AppReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default AppReducer
