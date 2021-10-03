import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import useStyle from './style';

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];



const MidSection = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid container className={classes.wrapper}>
                {
                    ImageURL.map((image, index) => (
                        <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt="" className={classes.image__2} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} alt="" className={clsx(classes.wrapper__2, classes.help)} style={{ width: '100%' }} />
        </>
    )
}

export default MidSection;