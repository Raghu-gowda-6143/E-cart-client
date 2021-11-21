import { Box, Typography, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import useStyle from './style';



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


const MultiSlide = ({ data, title }) => {
    const classes = useStyle();



    return (
        <Box className={classes.component__3}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                <Button variant="contained" className={classes.button}>View All</Button>
            </Box>
            <Divider />
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    data.map(product => {
                        if (product.tagline) {
                            return (
                                <Link
                                    key={product.id}
                                    to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                                    <Box
                                        textAlign="center"
                                        className={classes.wrapper}>
                                        <img
                                            src={product.url} alt=""
                                            className={classes.image}
                                        />
                                        <Typography
                                            className={classes.text}
                                            style={{ fontWeight: 600, color: '#212121' }}>
                                            {product.title.shortTitle}
                                        </Typography>
                                        <Typography
                                            className={classes.text}
                                            style={{ color: 'green' }}>
                                            {product.discount}
                                        </Typography>
                                        <Typography
                                            className={classes.text}
                                            style={{ color: '#212121', opacity: '.6' }}>
                                            {product.tagline}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        }

                    })
                }
            </Carousel>
        </Box>
    )
}

const Slide = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiSlide {...props} /> : ''
            }
        </>
    )
}

export default Slide;