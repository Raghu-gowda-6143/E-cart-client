/* eslint-disable no-undef */
import {
    SIGN_UP, SIGN_UP_FAIL,
    SIGN_IN, SIGN_IN_FAIL,
    SIGN_OUT, SIGN_OUT_FAIL,
    SIGN_OUT_ALL, SIGN_OUT_ALL_FAIL,
} from '../../constants/actionTypes';


import { api } from '../../services/api';

export const signUp = (Values) => async dispatch => {

    try {
        const { data } = await api.post(`/api/user/signUp`, Values);
        localStorage.setItem("name", data.name);
        localStorage.setItem("authToken", data.token);

        dispatch({
            type: SIGN_UP,
            payload: data.name
        });

    } catch (error) {
        if (error.response) {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: error.response.data.message
            })

        }

    }


};


export const signIn = (Values) => async dispatch => {

    try {
        const { data } = await api.post(`/api/user/logIn`, Values);

        localStorage.setItem("authToken", data.token);
        localStorage.setItem("name", data.name);
        //console.log(data.token)

        dispatch({
            type: SIGN_IN,
            payload: data.name
        });

    } catch (error) {
        if (error.response) {
            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.message
            })

        }
    }
};

export const signOut = (config) => async dispatch => {

    try {
        await api.get(`/api/user/logOut`, config);
        dispatch({
            type: SIGN_OUT,
        });
        localStorage.removeItem("authToken");
        localStorage.removeItem("name");


    } catch (error) {
        if (error.response) {
            dispatch({
                type: SIGN_OUT_FAIL,
                payload: error.response.data.message
            })
        }
    }
};

export const signOutAll = (config) => async dispatch => {

    try {
        const { data } = await api.get(`/api/user/logOutAll`, config);
        dispatch({
            type: SIGN_OUT_ALL,
            payload: data.token
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: SIGN_OUT_ALL_FAIL,
                payload: error.response.data.message
            })
        }
    }
};


// export const editUser = (Values) => async dispatch => {

//     try {
//         const { data } = await api.post('/api/user/edit', Values);

//         dispatch({
//             type: USER_EDIT,
//             payload: data.name
//         });

//     } catch (error) {
//         if (error.response) {
//             dispatch({
//                 type: USER_EDIT_FAIL,
//                 payload: error.response.data.message
//             })

//         }

//     }


// };
