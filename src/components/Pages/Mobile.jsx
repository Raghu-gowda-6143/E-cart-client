import React from 'react'
import { connect } from 'react-redux';
import PageDetail from './PageDetail';

const Mobile = ({ products }) => {



    return (
        <>
            {
                products.map(product => {
                    if (product.category === 'mobile') {
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
export default connect(mapStateToProps)(Mobile);
