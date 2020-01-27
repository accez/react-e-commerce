import React, { useReducer } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

const SignIn = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: '',
      password: ''
    }
  );
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(userInput.email, userInput.password)
      setUserInput({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = e => {
    const { value, name } = e.target
    setUserInput({ [name]: value })
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={userInput.email} handleChange={handleChange} label="email" required />
        <FormInput name="password" type="password" value={userInput.password} handleChange={handleChange} label="password" autoComplete="on" required />
        <CustomButton type="submit" isSubmit>Sign in</CustomButton>
        <div className="social-button-container">
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          <CustomButton onClick={signInWithFacebook} isFaceBookSignIn>Sign in with Facebook</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn