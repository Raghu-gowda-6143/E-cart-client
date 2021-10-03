import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, Typography, Grid } from '@material-ui/core';
import { signUp, signIn } from '../../redux/actions/authAction';
import { connect } from 'react-redux';


import useStyle from './style';

const loginInitialValues = {
    user_name: '',
    password: ''
};

const signupInitialValues = {
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, signIn, signUp }) => {
    const classes = useStyle();
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = () => {
        try {
            signIn(login);

            handleClose();

        } catch (error) {
            console.log(error)

        }
    }

    const signupUser = () => {
        try {
            signUp(signup);
            handleClose();

        } catch (error) {
            console.log(error)

        }

    };



    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const toggleSignIn = () => {
        toggleAccount(accountInitialValues.login);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{ display: 'flex' }}>

                    {
                        account.view === 'login' ?
                            <Box className={classes.login}>
                                <Grid container>
                                    <Grid item xs={12} >
                                        <TextField onChange={(e) => onValueChange(e)} name='user_name' label='Enter Username' className={classes.input__1} />
                                    </Grid>
                                    {error && <Typography className={classes.error}>Please enter valid Email ID /Mobile number</Typography>}
                                    <Grid item xs={12}>
                                        <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' className={classes.input__1} />

                                    </Grid>
                                </Grid>
                                <Button className={classes.loginbtn} onClick={() => loginUser()} >LOG IN</Button>

                                <Button
                                    onClick={() => toggleSignup()}
                                    className={classes.requestbtn}>
                                    New to E cart? Create an account
                                </Button>

                            </Box> :
                            <Box className={classes.login}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='first_name' label='Enter Firstname' className={classes.input__2} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='last_name' label='Enter Lastname' className={classes.input__2} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='user_name' label='Enter Username' className={classes.input__2} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' className={classes.input__2} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' className={classes.input__2} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' className={classes.input__2} />
                                    </Grid>

                                </Grid>
                                <Button
                                    className={classes.loginbtn}
                                    onClick={() => signupUser()} >
                                    SIGN UP
                                </Button>
                                <Button
                                    onClick={() => toggleSignIn()}
                                    className={classes.requestbtn}>
                                    Already have an account? LogIn
                                </Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog >
    )
}

const mapStateToPros = state => {
    return { name: state.auth.name }
}

export default connect(mapStateToPros, { signUp, signIn })(LoginDialog);