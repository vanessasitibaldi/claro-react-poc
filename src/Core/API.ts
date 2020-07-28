import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:9002'
});

export default api;