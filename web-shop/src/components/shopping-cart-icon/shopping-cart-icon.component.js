import React from 'react'
import { connect } from 'react-redux'
import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './shopping-cart-icon.scss'

const ShoppingCartIcon = ({ toggleShoppingCartHidden }) => (
  <div className='cart-icon' onClick={toggleShoppingCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCartHidden: () => dispatch(toggleShoppingCartHidden())
})

export default connect(null, mapDispatchToProps)(ShoppingCartIcon)