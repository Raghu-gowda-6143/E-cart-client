import {
    ADD_TO_CART,
    ADD_TO_CART_FAIL,
    GET_CART_ITEMS,
    GET_CART_ITEMS_FAIL,
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_FAIL,
} from '../../constants/actionTypes';

import { api } from '../../services/api';





export const addToCart = (values, config) => async(dispatch, getState) => {
    try {
        const { data } = await api.post(`/api/cart/add`, values, config);
        //console.log(data.cartItems)

        dispatch({
            type: ADD_TO_CART,
            payload: data.cartItem
        });


    } catch (error) {
        if (error.response) {
            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: error.response.data.message
            })
        }

    }
};
export const getCartItems = (config) => async(dispatch, getState) => {
    try {
        const { data } = await api.get(`/api/cart/get`, config);
        //console.log(data.cartItems)

        dispatch({
            type: GET_CART_ITEMS,
            payload: data.cartItems
        });



    } catch (error) {
        if (error.response) {
            dispatch({
                type: GET_CART_ITEMS_FAIL,
                payload: error.response.data.message
            })
        }

    }
};

export const removeFromCart = (id, config) => async dispatch => {
    try {
        const { data } = await api.delete(`/api/cart/delete/${id}`, config);
        dispatch({
            type: REMOVE_FROM_CART,
            payload: data.cartItem
        });


    } catch (error) {
        if (error.response) {
            dispatch({
                type: REMOVE_FROM_CART_FAIL,
                payload: error.response.data.message
            })
        }

    }
};