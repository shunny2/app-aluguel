import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ac6a-2804-431-d77e-9aa2-8d4e-bea6-f99d-acbe.ngrok.io/api',
});

export default instance;