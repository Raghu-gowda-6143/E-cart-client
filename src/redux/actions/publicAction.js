import {
    GET_PRODUCT, GET_PRODUCT_FAIL,
    GET_PRODUCTS, GET_PRODUCTS_FAIL
} from '../../constants/actionTypes';

import { api } from '../../services/api';



export const getProducts = () => async dispatch => {
    try {
        const { data } = await api.get(`/api/product/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: data.products
        });


    } catch (error) {
        if (error.response) {
            dispatch({
                type: GET_PRODUCTS_FAIL,
                payload: error.response.data.message
            })
        }

    }
};


export const getProductById = (id) => async dispatch => {
    try {
        const { data } = await api.get(`/api/product/product/${id}`);
        dispatch({
            type: GET_PRODUCT,
            payload: data.product
        });


    } catch (error) {
        if (error.response) {
            dispatch({
                type: GET_PRODUCT_FAIL,
                payload: error.response.data.message
            })
        }

    }
};
