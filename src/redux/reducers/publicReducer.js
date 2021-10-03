import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCTS, GET_PRODUCTS_FAIL } from '../../constants/actionTypes';



export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload };

        case GET_PRODUCTS_FAIL:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};


export const getProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return { ...state, product: action.payload }

        case GET_PRODUCT_FAIL:
            return { ...state, error: action.payload }

        default:
            return state;
    }

}