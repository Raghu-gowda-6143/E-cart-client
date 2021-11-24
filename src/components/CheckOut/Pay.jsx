import React, {useState, useEffect} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import useStyle from '../Product/style';
import {api} from '../../services/api';


const stripeKey = "pk_test_51JxSyKSBsrgnTdJQR8YLOuj0vNv82nIeF6LoCtdZFwxLZahj79Ot6qxjz0Yp25G8xiUhr3PHsTzh7OtoNmym06HW00M49YtjHJ";


const Pay = ({cost, buttonName}) => {
    const classes = useStyle();
    

    const history = useHistory()


    const [stripeToken, setStipeToken]=useState(null);


    const onToken = token=>{
        setStipeToken(token);
    }
    

    useEffect(()=>{
        const makeRequest=async()=>{
            try {
                const data = {
                    tokenId:stripeToken.id,
                    amount:cost*100
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

    },[stripeToken, cost, history]);



    return (
        stripeToken? (<span>Processing please wait...</span>):
        (
        <StripeCheckout
        name="E cart"
        billingAddress
        shippingAddress
        description={cost&&`Your total is Rs ${cost}`}
        amount={cost&&cost*100}
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
