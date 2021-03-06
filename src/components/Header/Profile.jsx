import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem, makeStyles, Button } from '@material-ui/core';
import { signOut } from '../../redux/actions/authAction';

import { connect } from 'react-redux';


const useStyle = makeStyles({
    component: {
        marginTop: 20,
    },
    logout: {
        fontSize: 14,
        marginLeft: 20
    }
})

const Profile = ({ signOut, history }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const config = {
        headers: {
            "content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        }
    };

    const logout = () => {
        try {
            signOut(config);
            handleClose();
            history.push("/")
        } catch (error) {
            console.log(error)

        }
    }


    return (
        <>
            <Link onClick={handleClick} style={{ marginTop: 8 }} >
                <Typography >
                    {localStorage.getItem("name")}
                </Typography>

            </Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    logout();
                }}>
                    <Button style={{width:"120px", backgroundColor: '#FB641B', color: 'white' }} >
                        logout
                    </Button>
                </MenuItem>
            </Menu>
        </>
    )
};


export default connect(null, { signOut })(Profile);