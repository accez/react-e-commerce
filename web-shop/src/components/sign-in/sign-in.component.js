import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" autoComplete="on" required />
          <CustomButton type="submit" isSubmit>Sign in</CustomButton>
          <div className="social-button-container">
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            <CustomButton onClick={signInWithFacebook} isFaceBookSignIn>Sign in with Facebook</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn