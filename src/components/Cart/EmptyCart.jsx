import React, { useState } from 'react';
import { makeStyles, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoginDialog from '../LogIn/LoginDialog';

const useStyle = makeStyles((theme) => ({
    component: {
        width: '80%%',
        height: '65vh',
        background: '#fff',
        margin: '80px 140px'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70
    },
    login: {
        marginTop: '50px',
        background: '#0bb3b0',
        color: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',

    },
}));


const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();


    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    }


    return (
        <>
            {localStorage.getItem("authToken") ?
                <Box className={classes.component}>
                    <Box className={classes.container}>
                        <img src={imgurl} alt="" className={classes.image} />
                        <Typography>Your cart is empty!</Typography>
                        <Typography variant="subtitle2">Add items to it now.</Typography>

                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button className={classes.login} variant="contained" >Shop Now</Button>
                        </Link>
                    </Box>
                </Box> :
                <Box className={classes.component}>
                    <Box className={classes.container}>
                        <img src={imgurl} alt="" className={classes.image} />
                        <Typography color="secondary" style={{ cursor: 'default' }}>Please Login</Typography>

                        <Link style={{ textDecoration: 'none' }}>
                            <Button className={classes.login} variant="contained" onClick={openDialog}>Login</Button>
                        </Link>

                        <LoginDialog open={open} setOpen={setOpen} />
                    </Box>
                </Box>
            }
        </>
    )
}

export default EmptyCart;