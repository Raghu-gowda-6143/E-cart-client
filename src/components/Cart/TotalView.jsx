import { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import useStyle from './style';



const TotalView = ({ cartItems }) => {
    const classes = useStyle();
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)


    useEffect(() => {
        const totalAmount = () => {
            let price = 0, discount = 0;
            //console.log(cartItems);
            cartItems.map(item => {
                //console.log(item.products[0].price)
                price += item.products[0].price.mrp
                discount += (item.products[0].price.mrp - item.products[0].price.cost)
            })
            setPrice(price);
            setDiscount(discount);
        }
        totalAmount();
    }, [cartItems]);


    return (
        <Box className={classes.component__3}>
            <Box className={classes.header__2} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <Typography className={classes.greyTextColor__2}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price ({cartItems?.length} item)<span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount<span className={classes.price}>-₹{discount}</span></Typography>
                <Typography>Delivery Charges<span className={classes.price__2}>₹40</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price - discount + 40}</span></Typography>
                <Typography style={{ fontSize: 16, color: 'green' }}>You will save ₹{discount - 40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView;