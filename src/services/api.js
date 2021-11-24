import axios from 'axios';

const url = "https://raghu-ecart-server.herokuapp.com";


//host URL
export const api = axios.create({
    baseURL: url
});