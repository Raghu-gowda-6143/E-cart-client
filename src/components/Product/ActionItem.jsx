import { Button, Box } from '@material-ui/core';
import { ShoppingCart as Cart,} from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../redux/actions/privateAction';
import { connect } from 'react-redux';
import useStyle from './style';
import Pay from '../CheckOut/Pay'




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
           <Pay product={product} buttonName="Buy Now" />
            
        </Box>
    )
}

export default connect(null, { addToCart })(ActionItem);