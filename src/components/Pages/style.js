import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    component__1: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent__1: {
        // width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header__1: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    },
    component__2: {
        width: '78%',
        borderTop: '4px solid #f0f0f0',
        display: 'flex',
        marginLeft: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',

        }
    },
    leftComponent__2: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            margin: 5,
        }
    },
    image: {
        height: 250,
        width: 250,
        [theme.breakpoints.down('md')]: {
            width: 150,
            height: 150
        }
    },
    mid: {
        marginLeft: 50,
        marginTop: 35,
        [theme.breakpoints.down('md')]: {
            marginLeft: 30,
            marginTop: 15,


        }
    },
    greyTextColor__1: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price__1: {
        fontSize: 18,
        fontWeight: 600
    },
    remove: {
        marginTop: 15,
        '&:hover': {
            backgroundColor: 'red',
            color: 'white'
        }
    },

    header__2: {
        padding: '15px 24px',
        background: '#fff'
    },
    greyTextColor__2: {
        color: '#878787'
    },
    container: {
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price__2: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    },

}))