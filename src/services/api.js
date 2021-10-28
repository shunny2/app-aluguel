import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://d9c5-2804-431-d77e-9aa2-75ea-d6f3-4fec-f7e1.ngrok.io/api',
});

export default instance;