import React, { useState } from 'react';
import { Box, Typography, Badge, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import { connect } from 'react-redux';
import LoginDialog from '../LogIn/LoginDialog';
import Profile from './Profile';
import useStyle from './style';


const CustomButtons = ({ cartItems }) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);




    const openDialog = () => {
        setOpen(true);
    }



    return (
        <Box className={classes.wrapper}>
            {
                localStorage.getItem("name") ? <Profile /> :
                    <Link >
                        <Button className={classes.login} variant="contained" onClick={openDialog}>Login</Button>
                    </Link>
            }
            <Link style={{ marginTop: 8 }} >
                <Typography >More</Typography>

            </Link>
            <Link to="/cart" className={classes.container__2}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>

            </Link>
            <LoginDialog open={open} setOpen={setOpen} />
        </Box >
    )
}

const mapStateToProps = state => {
    return { cartItems: state.getCart.cartItems };
};

export default connect(mapStateToProps, null)(CustomButtons);