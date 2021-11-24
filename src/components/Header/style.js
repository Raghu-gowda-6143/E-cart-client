import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    header: {
        background: '#0bb3b0',
        width: "100vw",
        height: 55,
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.down('sm')]: {
            height: 85
        }
    },
    component: {
        width: "100vw",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },

    logobtn: {
        width: "15%",
        marginLeft: '12%',
        marginRight: '1%',
        display: 'flex',
        color: '#FFFFFF',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            width: "50%",
            display: 'flex',
            justifyContent: "flex-end",


        }



    },
    mobile_component: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "85px",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-evenly",
        }

    },
    mobile_component_inner: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            width: "50%",
            display: 'flex',
            alignItems: "center",

        }

    },

    logo: {
        width: 75,

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
        width: "50vw",
        marginLeft: "20%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10',
        }
    },


    container__2: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-evenly"
        }

    },
    wrapper: {
        width: "30vw",
        margin: '0 10% 0 auto',
        display: 'flex',
        justifyContent: "space-evenly",
        '& > *': {
            marginRight: 30,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                marginRight: 15,

            }

        },
        [theme.breakpoints.down('sm')]: {
            width: "50vw",
            display: 'flex',
            justifyContent: "flex-end",
            marginLeft: 'auto',


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
            width: "100px"
        }
    },
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 0,

        }

    },
    searchIcon: {
        width: "50px",
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
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }

    },
    list__2: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36,
        [theme.breakpoints.down('sm')]: {
            width: "87.5%",

        }
    },

    customButtons: {
        width: "25%",
        marginLeft: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        [theme.breakpoints.down('sm')]: {
            width: "0",
            justifyContent: "flex-start",
        }

    }

}));