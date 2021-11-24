import { Box,  Grid } from '@material-ui/core';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getCartItems } from '../../redux/actions/privateAction';
import TotalView from './TotalView';
import Pay from '../CheckOut/Pay'
import useStyle from './style';


const Cart = ({ cartItems, removeFromCart, getCartItems, product }) => {
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
                                {price&& <Pay cost={price - discount + 40} buttonName="Place Order"/>}
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