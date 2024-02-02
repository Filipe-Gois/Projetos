import axios from "axios";

const apiPort = '';

const localApiUrl = ``;

const externallApiUrl = `https://brasilaberto.com/api/v1/zipcode`;
// const externalApiUrl = null;

const api = axios.create({
    baseURL: externallApiUrl
});


export default api;