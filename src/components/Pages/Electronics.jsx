import { connect } from 'react-redux';
import PageDetail from './PageDetail';

const Electronics = ({ products }) => {



    return (
        <>
            {
                products.map(product => {
                    if (product.category === 'electronics') {
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
export default connect(mapStateToProps)(Electronics);
