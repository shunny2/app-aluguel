import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://2259-2804-431-d77f-b7a1-ecf3-163c-1f7f-9219.ngrok.io/api',
});

export default instance;