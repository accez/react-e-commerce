import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../shopping-cart/shopping-cart.componenet'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/shopping-cart/shopping-cart.selectors'
import './shopping-cart-dropdown.styles.scss'

const ShoppingCartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default connect(mapStateToProps)(ShoppingCartDropdown)