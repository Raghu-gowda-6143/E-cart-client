import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles(theme => ({
    container: {
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}));

const bannerData = [
    'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/e9d9cd1b59b24cb0.jpeg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/3f91a1bf8b505dc1.jpeg?q=50',

]

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{
                style: {
                    color: 'white',
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map((image, i) => (
                    <img key={i} src={image} alt="" className={classes.image} />
                ))
            }
        </Carousel>
    )
}

export default Banner;