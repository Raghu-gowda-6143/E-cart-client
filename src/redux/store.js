import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as formReducer } from "redux-form";

import { authReducer } from "./reducers/authReducers";
import { addressReducer } from "./reducers/privateReducer";
import { addCartItemReducer } from "./reducers/privateReducer";
import { getCartItemsReducer } from "./reducers/privateReducer";
import { getProductsReducer } from "./reducers/publicReducer";
import { getProductReducer } from "./reducers/publicReducer";


const reducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    address: addressReducer,
    addToCart: addCartItemReducer,
    getCart: getCartItemsReducer,
    products: getProductsReducer,
    product: getProductReducer,
});

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;