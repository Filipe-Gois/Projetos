import axios from "axios"

export const url = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"

export const externalApiUrl = url

const api = axios.create({
    baseURL: externalApiUrl
})

export default api;