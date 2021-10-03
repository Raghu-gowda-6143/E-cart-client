import {
    ADD_ADDRESS, ADD_ADDRESS_FAIL,
    GET_ADDRESS, GET_ADDRESS_FAIL,
    EDIT_ADDRESS, EDIT_ADDRESS_FAIL,
    ADD_TO_CART, ADD_TO_CART_FAIL,
    GET_CART_ITEMS, GET_CART_ITEMS_FAIL,
    REMOVE_FROM_CART, REMOVE_FROM_CART_FAIL,
} from '../../constants/actionTypes';


export const addressReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { ...state };

        case ADD_ADDRESS_FAIL:
            return { ...state, error: action.payload };

        case GET_ADDRESS:
            return { ...state, [action.payload.id]: action.payload };

        case GET_ADDRESS_FAIL:
            return { ...state, error: action.payload };

        case EDIT_ADDRESS:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_ADDRESS_FAIL:
            return { ...state, error: action.payload };


        default:
            return state;
    }
};


export const addCartItemReducer = (state = { cartItem: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cartItem: action.payload }

        case ADD_TO_CART_FAIL:
            return { ...state, error: action.payload };



        default:
            return state;
    }
}

export const getCartItemsReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {


        case GET_CART_ITEMS:
            return { ...state, cartItems: action.payload }

        case GET_CART_ITEMS_FAIL:
            return { ...state, error: action.payload };

        case REMOVE_FROM_CART:
            // console.log(state.cartItems)
            // console.log(action.payload);
            let s = {
                ...state, cartItems: state.cartItems.filter(product => product._id !== action.payload._id)
            }
            //console.log(s);
            return s;


        case REMOVE_FROM_CART_FAIL:
            return { ...state, error: action.payload };



        default:
            return state;
    }
}

