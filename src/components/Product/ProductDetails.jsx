import { Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import useStyle from './style';


const ProductDetail = ({ product }) => {
    const classes = useStyle();
    // const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <>
            <Typography style={{marginLeft:"17px"}}>Available offers</Typography>

            <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Seller</TableCell>
                        <TableCell className={classes.smallText}>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;