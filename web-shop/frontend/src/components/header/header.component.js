import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/abstract.svg'
import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'
import ShoppingCartIcon from '../shopping-cart-icon/shopping-cart-icon.component'
import ShoppingCartDropdown from '../shopping-cart-dropdown/shopping-cart-dropdown.component'
import { selectCartHidden } from '../../redux/shopping-cart/shopping-cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { connect } from 'react-redux'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
      }
      <ShoppingCartIcon />
    </div>
    {hidden ? null : <ShoppingCartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)