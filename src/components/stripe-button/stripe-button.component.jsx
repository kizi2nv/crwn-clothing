import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
 
    const publishablekey = 'pk_test_51HOXiTI3kBSexrEOGUCG3wrcsX2FxbpWyGpF0OSdhpq4yyPcF2z1Sz1DZUrd5s7ZEQtwM52344ikfS2mEGntjlpk00H16qZSqf'
    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return(
        <StripeCheckout
        label ='Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress  
        shippingAdress
        image= 'https://svgshare.com/i/CUz.svg'
        description= {`your total is $$ {price}`}
        amount ={priceForStripe}
        panelLabel = 'Pay Now'
        token ={onToken}
         stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;