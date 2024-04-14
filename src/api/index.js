import axios from "axios";

export const API_URL = "http://10.101.24.43:8000";
export const API = axios.create({
    baseURL: API_URL,
    withCredentials: true
});
