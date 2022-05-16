import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6990-2804-431-d77f-ffaf-f1eb-abb3-cd84-7415.ngrok.io/api',
});

export default instance;