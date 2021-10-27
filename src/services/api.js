import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ac83-152-249-4-218.ngrok.io/api',
});

export default instance;