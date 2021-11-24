import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    component__1: {
        padding: 10,
        background: '#F2F2F2'
    },
    component__2: {
        display: 'flex'
    },
    leftComponent__2: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightComponent__2: {
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    component__3: {
        marginTop: 12,
        background: '#FFFFFF'
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#0bb3b0',
        borderRadius: 2,
        fontSize: 13,
        [theme.breakpoints.down('md')]: {
            width: "100px",
            height: '40px',
            textAlign: "center"
        }
    },
    wrapper: {
        padding: '25px 15px',
        [theme.breakpoints.down('md')]: {
            marginTop: '-20px'
        }
    },

    component__4: {
        background: '#fff',
        color: '#000000',
        display: 'flex',
        posistion: "absolute",
        justifyContent: 'space-between',
        alignItems: "center",
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }

    },
    container: {
        padding: '15px 0px',
        textAlign: 'center',

    },
    text__2: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: 'pointer',

    },

    wrapper__2: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image__2: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 150
        }
    }


}));