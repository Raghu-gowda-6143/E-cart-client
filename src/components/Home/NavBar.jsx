import { Box, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyle from './style';


const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component__4}>
            <Link to="/mobiles" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton style={{ borderRadius: '0', padding: '0 5px', color: 'white' }}>
                    <Box className={classes.container}>
                        <Typography className={classes.text__2}>Mobiles</Typography>
                    </Box>
                </IconButton>

            </Link>
            <Link to="/electronics" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton style={{ borderRadius: '0', padding: '0 5px', color: 'white' }}>

                    <Box className={classes.container}>
                        <Typography className={classes.text__2}>Electronics</Typography>
                    </Box>
                </IconButton>

            </Link>
            <Link to="/fashion" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton style={{ borderRadius: '0', padding: '0 5px', color: 'white' }}>

                    <Box className={classes.container}>
                        <Typography className={classes.text__2}>Fashion</Typography>
                    </Box>
                </IconButton>

            </Link>
            <Link to="/appliances" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton style={{ borderRadius: '0', padding: '0 5px', color: 'white' }}>

                    <Box className={classes.container}>
                        <Typography className={classes.text__2}>Appliances</Typography>
                    </Box>
                </IconButton>

            </Link>
        </Box>
    )
}

export default NavBar;