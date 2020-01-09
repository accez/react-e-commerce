import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const key = 'pk_test_Yi9Bvw83PnqVFPxvmj0MCdAj00SmEzVk3R'

  const onToken = token => {
    console.log(token)
    alert('Klart')
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Web Shop' //change name
      billingAddress
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