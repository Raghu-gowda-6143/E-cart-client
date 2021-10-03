import { Box, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getCartItems } from '../../redux/actions/privateAction';
import TotalView from './TotalView';
import { payment } from '../../services/api';
import useStyle from './style';


const Cart = ({ cartItems, removeFromCart, getCartItems }) => {
    const classes = useStyle();




    useEffect(() => {
        const config = {
            headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authToken")}`
            }
        };
        getCartItems(config)

    }, [getCartItems]);

    const config = {
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        }
    };


    const removeItemFromCart = (id) => {
        removeFromCart(id, config);
    }

    //console.log(cartItems)

    // const data = {
    //     name: cartItems.name,
    //     price: cartItems.products[0].price.cost
    // }

    // const buyNow = async () => {
    //     let response = await payment(data, config);

    // }

    return (
        <>
            {cartItems.length ?
                <Grid container className={classes.component__1}>
                    <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent__1}>

                        {cartItems.map(item => {
                            //console.log(typeof (item.products));
                            return (

                                < CartItem
                                    key={item._id}
                                    item={item.products}
                                    removeItemFromCart={removeItemFromCart} />
                            )
                        })

                        }
                        <Box className={classes.bottom}>
                            <Button

                                variant="contained" className={classes.placeOrder}>Place Order</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems} />
                    </Grid>
                </Grid> : <EmptyCart />
            }

        </>

    )
}

const mapStateToProps = state => {
    return { cartItems: state.getCart.cartItems }
}


export default connect(mapStateToProps, { addToCart, removeFromCart, getCartItems })(Cart);