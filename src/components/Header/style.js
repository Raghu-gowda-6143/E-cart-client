import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    header: {
        background: '#0bb3b0',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container__1: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list__1: {
        width: 250,
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    container__2: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#0bb3b0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    login: {
        color: '#0bb3b0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#0bb3b0',
            color: '#FFFFFF'
        }
    },
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
    },
    searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        borderRadius: 1,
        display: 'flex',
        color: 'blue'
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%',
        borderRadius: '10px'


    },
    inputInput: {
        paddingLeft: 20,
        width: '100%',

    },
    list__2: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36
    }




}));