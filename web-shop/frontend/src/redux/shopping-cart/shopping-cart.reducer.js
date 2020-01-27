import ShoppingCartActionTypes from './shopping-cart.types'
import { addItemToCart, removeItemFromCart } from './shopping-cart.utils'

const INITAL_STATE = {
  hidden: true,
  cartItems: []
}

const shoppingCartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShoppingCartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ShoppingCartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case ShoppingCartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)
      }
    case ShoppingCartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default shoppingCartReducer