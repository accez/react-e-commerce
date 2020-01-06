import React from 'react'
import { connect } from 'react-redux'
import { toggleShoppingCartHidden } from '../../redux/shopping-cart/shopping-cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { SelectCartItemCount } from '../../redux/shopping-cart/shopping-cart.selectors'
import './shopping-cart-icon.scss'

const ShoppingCartIcon = ({ toggleShoppingCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleShoppingCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleShoppingCartHidden: () => dispatch(toggleShoppingCartHidden())
})

const mapStateToProps = (state) => ({
  itemCount: SelectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon)