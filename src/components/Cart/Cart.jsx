import { Box,  Grid } from '@material-ui/core';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getCartItems } from '../../redux/actions/privateAction';
import TotalView from './TotalView';
import Pay from '../CheckOut/Pay'
import useStyle from './style';


const Cart = ({ cartItems, removeFromCart, getCartItems, product }) => {
    const classes = useStyle();

    console.log(product);

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
                            <div style={{marginLeft:"50%", width:"100%"}}>
                                <Pay product={product} buttonName="Place Order"/>
                            </div>
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
    return { 
        cartItems: state.getCart.cartItems ,
        product: state.product.product}
}


export default connect(mapStateToProps, { addToCart, removeFromCart, getCartItems })(Cart);