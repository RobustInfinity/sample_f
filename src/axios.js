
import axios from 'axios';
import config from './config';


const instance = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:50000//10s max time out for now
});

export default instance