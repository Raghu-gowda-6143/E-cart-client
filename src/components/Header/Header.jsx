import { AppBar, Toolbar, Box, Typography, withStyles, IconButton, Drawer, List } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';

import useStyle from './style';


const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    //const logoURL = '';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list__1}  >
            <List >
                <listItem button >
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <Typography variant="h5">E cart</Typography>

                </Link>
                <Search />
                <span className={classes.customButtons}><CustomButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;