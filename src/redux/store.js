import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import AppReducer from "./root-reducer"

const middleWares = [logger]
const store = createStore(AppReducer, applyMiddleware(...middleWares))

export default store
