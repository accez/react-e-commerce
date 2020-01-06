import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const SelectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumalator, cartItem) => accumalator + cartItem.quantity,
    0)
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)