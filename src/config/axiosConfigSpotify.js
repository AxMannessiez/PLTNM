import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_API_URL,
});

instance.interceptors.request.use((config) => {
    config.params = { client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID, ...config.params };
    return config;
});

export default instance;