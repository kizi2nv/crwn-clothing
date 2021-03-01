import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';
//import { response } from 'express';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HOXiTI3kBSexrEOGUCG3wrcsX2FxbpWyGpF0OSdhpq4yyPcF2z1Sz1DZUrd5s7ZEQtwM52344ikfS2mEGntjlpk00H16qZSqf'
   
    const onToken = token => {
        axios({
            url: 'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
            
        }).then(response => {
            alert('Payment succcesful')
        }).catch (error=>{
            console.log('Payment error:', JSON.parse(error));
            alert(
                'There was an issue with your payment, Please sure you use the provided credit card'
            );
        });  
    };

    return(
        <StripeCheckout
        label ='Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress   
        shippingAdress
        image= 'https://svgshare.com/i/CUz.svg'
        description= {`your total is $${price}`}
        amount ={priceForStripe}
        panelLabel = 'Pay Now'
        token ={onToken}
         stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;