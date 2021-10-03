import { Button, Box } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../redux/actions/privateAction';
import { connect } from 'react-redux';
import useStyle from './style';
import { payment } from '../../services/api';




const ActionItem = ({ product, addToCart }) => {
    const classes = useStyle();
    const history = useHistory();
    const { id, price, url, title } = product;

    const quantity = 1;



    const config = {
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        }
    };

    const values = {
        productId: id,
        productImg: url,
        quantity,
        name: title.longTitle,
        price
    }

    const data = {
        name: title.shortTitle,
        price: price.cost
    }
    const buyNow = () => {
        payment(data, config);

    }

    const addItemToCart = () => {
        addToCart(values, config);
        history.push('/cart');
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} alt="" className={classes.productImage} /><br />
            <Button
                onClick={() => addItemToCart()}
                fullWidth
                className={clsx(classes.button, classes.addToCart)} style={{ marginRight: 10 }}
                variant="contained">
                <Cart style={{ marginRight: '4px' }} />
                Add to Cart
            </Button>
            <Button
                onClick={() => buyNow()}
                fullWidth
                className={clsx(classes.button, classes.buyNow)} variant="contained">
                <Flash />
                Buy Now
            </Button>
        </Box>
    )
}


export default connect(null, { addToCart })(ActionItem);