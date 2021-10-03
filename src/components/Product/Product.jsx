import { useEffect } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetails';
import { connect } from 'react-redux';
import ActionItem from './ActionItem';
import useStyles from './style';


import { getProductById } from '../../redux/actions/publicAction';





const Product = ({ history, match, getProductById, product }) => {
    const classes = useStyles();



    useEffect(() => {
        if (product && match.params.id !== product.id)
            getProductById(match.params.id);
    }, [product, match, getProductById]);


    //console.log(product);


    // useEffect(() => {
    //     getProductById(id);
    // }, []);



    return (
        <Box className={classes.component}>
            <Box></Box>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

const mapStateToProps = state => {
    return { product: state.product.product }
}
export default connect(mapStateToProps, { getProductById })(Product);