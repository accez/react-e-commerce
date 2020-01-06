import ShoppingCartActionTypes from './shopping-cart.types'

const INITAL_STATE = {
  hidden: true
}

const shoppingCartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShoppingCartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default shoppingCartReducer