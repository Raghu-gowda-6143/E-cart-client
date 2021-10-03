import { connect } from 'react-redux';
import PageDetail from './PageDetail';

const Fashion = ({ products }) => {



    return (
        <>
            {
                products.map(product => {
                    if (product.category === 'fashion') {
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
export default connect(mapStateToProps)(Fashion);
