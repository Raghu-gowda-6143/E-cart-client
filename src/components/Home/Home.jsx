import { Box } from '@material-ui/core';
import MidSlide from './MidSlide';
import Slide from './Slide';
import NavBar from './NavBar';
import MidSection from './MidSection';
import { connect } from 'react-redux';
import useStyle from './style';
import Banner from './Banner';



const Home = ({ products }) => {
    const classes = useStyle();

    return (
        <>
            <NavBar />

            <Box className={classes.component__1}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />

                <Slide
                    data={products}
                    title='Discounts for You'
                    timer={false}
                    multi={true}
                />

                <Slide
                    data={products}
                    title='Top Selection'
                    timer={false}
                    multi={true}
                />

            </Box>

            
        </>
    )
}

const mapStateToProps = state => {
    return { products: state.products.products }
}
export default connect(mapStateToProps)(Home);