import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';


function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_2etKoZ4sDrF9zaTvo5dltfIb00ypwXafiY";

  const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data:{
            amount: priceForStripe,
            token
        }
    }).then(res => {
        alert('Payment successful')
    }).catch(error => {
        console.log('Payment error: ', JSON.parse(error))
        alert('Sorry, cannot process the payment')
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CHR Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
