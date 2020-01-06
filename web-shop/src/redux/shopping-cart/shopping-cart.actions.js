import ShoppingCartActionTypes from './shopping-cart.types'

export const toggleShoppingCartHidden = () => ({
  type: ShoppingCartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ShoppingCartActionTypes.ADD_ITEM,
  payload: item
})