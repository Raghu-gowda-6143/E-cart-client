import { SIGN_UP, SIGN_IN, SIGN_OUT } from "../../constants/actionTypes";



export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state };

        case SIGN_IN:
            return { ...state };

        case SIGN_OUT:
            return { ...state, };

        default:
            return state;
    }
};