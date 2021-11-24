import axios from 'axios';

const url = process.env.REACT_APP_SERVER_API;


//host URL
export const api = axios.create({
    baseURL: url
});