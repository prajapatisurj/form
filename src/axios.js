import axios from 'axios';
const instance = axios.create({

    baseURL: 'http://2a6c175ede83.ngrok.io/api/',

    timeout: 50000,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});

export default instance;