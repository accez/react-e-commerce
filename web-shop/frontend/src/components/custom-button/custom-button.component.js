import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, isFaceBookSignIn, isSubmit, inverted, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} 
  ${isFaceBookSignIn ? 'facebook-sign-in' : ''}
  ${isSubmit ? 'submit-button' : ''} custom-button
  ${inverted ? 'inverted' : ''}`}
    {...otherProps}>
    {children}
  </button>
)

export default CustomButton