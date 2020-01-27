import React, { useReducer } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const SignUp = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  );
  const handleSubmit = async e => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = userInput
    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setUserInput({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserInput({ [name]: value })
  }
  const { displayName, email, password, confirmPassword } = userInput

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div >
  )
}

export default SignUp