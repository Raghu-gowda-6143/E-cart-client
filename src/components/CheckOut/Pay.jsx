import React, {useState, useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import useStyle from '../Product/style';
import {api} from '../../services/api';


const stripeKey = process.env.REACT_APP_PUBLIC_KEY;


const Pay = ({product, buttonName}) => {
    const classes = useStyle();

    const history = useHistory()

    const {  price  } = product;

    const [stripeToken, setStipeToken]=useState(null);


    const onToken = token=>{
        setStipeToken(token);
    }
    

    useEffect(()=>{
        const makeRequest=async()=>{
            try {
                const data = {
                    tokenId:stripeToken.id,
                    amount:price.cost*100
                }
                const config = {
                    headers: {
                        "content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("authToken")}`
                    }
                };
                const res = await api.post(`api/payment/pay`, data, config
                );

                console.log(res);
                history.push("/success")
                
            } catch (error) {
                console.log(error);
                history.push("/cancelled")


                
            }
            
        };
        stripeToken && makeRequest();

    },[stripeToken, price, history]);



    return (
        stripeToken? (<span>Processing please wait...</span>):
        (
        <StripeCheckout
        name="E cart"
        billingAddress
        shippingAddress
        description={`Your total is ${price.cost} Rs`}
        amount={price.cost*100}
        token={onToken}
        currency="inr"
        stripeKey={stripeKey}
        >
            <Button
                //onClick={() => buyNow()}
                fullWidth
                className={clsx(classes.button, classes.buyNow)} variant="contained">
                {buttonName}
            </Button>

        </StripeCheckout>
        )
    )
}

export default Pay;
