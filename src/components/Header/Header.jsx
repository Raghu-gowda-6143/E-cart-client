import { AppBar, Toolbar,  Typography, withStyles,  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './Search';

import useStyle from './style';


const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    //const logoURL = '';

    


    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>

                <div className={classes.component}>
                    <Link to='/' className={classes.logobtn}>
                        <Typography variant="h5">E cart</Typography>
                    </Link>
                    <Search />
                    <span className={classes.customButtons}><CustomButtons /></span>
                </div>
                <div className={classes.mobile_component}>
                    <div className={classes.mobile_component_inner}>
                        <Link to='/' className={classes.logobtn}>
                            <Typography variant="h5" style={{lineHeight:"0"}}>E cart</Typography>
                        </Link>
                        <span className={classes.customButtons}><CustomButtons /></span>
                    </div>
                    <Search />
                </div>
               
            </ToolBar>
        </AppBar>
    )
}

export default Header;