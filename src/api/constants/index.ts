import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export const instance = axios.create({
    baseURL,
})
