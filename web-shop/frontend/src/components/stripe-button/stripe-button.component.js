import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const key = 'pk_test_Yi9Bvw83PnqVFPxvmj0MCdAj00SmEzVk3R'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment succeful')
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error))
      alert('There was an issue with your payment')
    })
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Web Shop' //change name
      billingAddress
      image='https://svgshare.com/i/HNP.svg'
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={key}
    />
  )
}

export default StripeButton