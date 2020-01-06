import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignOut from '../../components/sign-up/sign-up.component'
import './sign-in-out.styles.scss'

const SignInOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignOut />
  </div>
)

export default SignInOut