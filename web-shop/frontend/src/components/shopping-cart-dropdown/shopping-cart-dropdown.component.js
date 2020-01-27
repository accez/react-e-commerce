import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../shopping-cart/shopping-cart.componenet'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/shopping-cart/shopping-cart.selectors'
import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions'
import { withRouter } from 'react-router-dom'
import './shopping-cart-dropdown.styles.scss'

const ShoppingCartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
          : (
            <span className='empty-message'>Your shopping cart is empty</span>
          )}
    </div>
    {
      cartItems.length ? (
        <CustomButton onClick={() => {
          history.push('/checkout')
          dispatch(toggleShoppingCartHidden())
        }}>
          GO TO CHECKOUT
      </CustomButton>
      )
        :
        (null)
    }  </div>

)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown))