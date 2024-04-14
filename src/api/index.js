import axios from "axios";

export const API_URL = "http://10.101.24.41:8080";
export const API = axios.create({
    baseURL: API_URL,
    withCredentials: true
});
