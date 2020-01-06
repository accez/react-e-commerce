import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import shoppingCartReducer from './shopping-cart/shopping-cart.reducer'

export default combineReducers({
  user: userReducer,
  cart: shoppingCartReducer
})