import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles(theme => ({
    container: {
        width: '100%',
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

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


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
            responsive={responsive}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            StylesProvider
            navButtonsProps={{
                style: {
                    color: 'black',
                    backgroundColor: '#fff',
                    borderRadius: "0px 5px 5px 0",
                    margin: 0,
                    marginTop:-20,
                    width: 50,
                    height:100
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