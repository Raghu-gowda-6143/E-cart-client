import { Box, Typography, Card } from '@material-ui/core';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


import useStyle from './style';


const PageDetail = ({ product }) => {
    const classes = useStyle();
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (

        <Card className={classes.component__2}>
            <Link
                key={product._id}
                to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Box className={classes.leftComponent__2}>
                    <img src={product.url} alt="" className={classes.image} />
                </Box>

            </Link>

            <Box className={classes.mid}>
                <Typography>
                    {(product.title.longTitle)}
                </Typography>
                <Typography className={clsx(classes.greyTextColor__1, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span className={classes.price__1}>
                        ₹{product.price.cost}
                    </span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}>
                        <strike>
                            ₹{product.price.mrp}
                        </strike>
                    </span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>
                        {product.price.discount} off
                    </span>
                </Typography>
                <Typography >Get it by <span style={{ fontWeight: 600 }}> {date.toDateString()}</span></Typography>

            </Box>
        </Card>



    )
}

export default PageDetail
