
import { Box } from '@material-ui/core';
import Slide from './Slide';
import useStyle from './style';



const MidSlide = ({ products }) => {
    const classes = useStyle();
    const adURL = 'https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg';

    return (
        <Box className={classes.component__2}>
            <Box className={classes.leftComponent__2}>
                <Slide
                    data={products}
                    title='Deals of the Day'
                    timer={true}
                    multi={true}
                />
            </Box>
            <Box className={classes.rightComponent__2}>
                <img src={adURL} alt="" style={{ width: 232 }} />
            </Box>
        </Box>
    )
}

export default MidSlide;