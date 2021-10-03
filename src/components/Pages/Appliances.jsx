import { connect } from 'react-redux';
import PageDetail from './PageDetail';

const Appliances = ({ products }) => {



    return (
        <>
            {
                products.map(product => {
                    if (product.category === 'appliances') {
                        return (
                            <PageDetail
                                product={product}
                            />


                        )
                    }

                })
            }

        </>
    )
}


const mapStateToProps = state => {
    return { products: state.products.products }
}
export default connect(mapStateToProps)(Appliances);
