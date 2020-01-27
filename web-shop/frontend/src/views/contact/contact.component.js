import React, { useReducer } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './contact.styles.scss'


const Contact = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      text: ''
    }
  );

  const handleOnChange = evt => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Thank you for contacting us.`)
    setUserInput({ name: '', email: '', text: '' })

  }

  return (
    <div className="contact">
      <form className='contact-form' onSubmit={handleSubmit}>
        <FormInput name='name' type='name' value={userInput.name} label="name" onChange={handleOnChange} required />
        <FormInput name="email" type="email" value={userInput.email} label="email" onChange={handleOnChange} required />
        <label htmlFor="subject">Subject</label>
        <textarea value={userInput.text} onChange={handleOnChange} name='text' placeholder="Write something.."></textarea>
        <CustomButton type='submit' isSubmit>Contact us</CustomButton>
      </form>
    </div>
  )
}
export default Contact  