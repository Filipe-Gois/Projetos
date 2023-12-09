import axios from "axios"

export const externalApiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

const api = axios.create({
    baseURL: externalApiUrl
})

export default api;