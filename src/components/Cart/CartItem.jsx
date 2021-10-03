import { Card, Box, Typography, Button } from '@material-ui/core';
import { Delete } from "@material-ui/icons";
//import { addEllipsis } from '../../utils/util';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import GroupButton from './GroupButton';
import useStyle from './style';


const CartItem = ({ item, removeItemFromCart }) => {
    //console.log(item[0].productId)
    const classes = useStyle();
    //console.log(item[0].price)


    return (
        <Card className={classes.component__2}>
            <Link
                key={item[0].productId}
                to={`product/${item[0].productId}`} style={{ textDecoration: 'none' }}>
                <Box className={classes.leftComponent__2}>
                    <img src={item[0].productImg} alt="" className={classes.image} />
                    <GroupButton />
                </Box>

            </Link>

            <Box className={classes.mid}>
                <Typography>
                    {(item[0].name)}
                </Typography>
                <Typography className={clsx(classes.greyTextColor__1, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span className={classes.price__1}>
                        ₹{item[0].price.cost}
                    </span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}>
                        <strike>
                            ₹{item[0].price.mrp}
                        </strike>
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>
                        {item[0].price.discount} off
                    </span>
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemFromCart(item[0]._id)}><Delete color="light" /></Button>
            </Box>
        </Card>
    )
}

export default CartItem;