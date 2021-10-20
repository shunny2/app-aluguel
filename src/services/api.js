import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://e381-2804-431-d77e-4832-f804-724a-f823-1b8b.ngrok.io/api',
});

export default instance;