import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export const instance = axios.create({
    baseURL,
})

const accessToken = localStorage.getItem('accessToken');
if(accessToken) instance.defaults.headers.common.Authorization = accessToken;
 
const onResponse = (response:AxiosResponse) => response;
const onResponseError = (err:AxiosError) =>{ 
    if(err.response?.status === 500) null;
    return Promise.reject(err)
};


instance.interceptors.response.use(onResponse,onResponseError)