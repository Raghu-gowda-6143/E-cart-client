import axios from 'axios';

const url = process.env.REACT_APP_API;


//host URL
export const api = axios.create({
    baseURL: url
});



export const payment = async (data, config) => {
    try {
        console.log('payment api');
        const response = await api.post(`/api/payment/pay`, data, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}


