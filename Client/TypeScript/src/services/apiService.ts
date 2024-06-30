import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {ApiError, ApiResponse, ApiService} from "../types/api.ts";

const requestClient = axios.create({
    baseURL: '/api/v1',
    withCredentials: true,
})

const handleResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
    return response.data.data;
}

const handleError = (error: AxiosError): ApiError => {
    return {
        message: error.message,
        status: error.response?.status,
    };
}

const apiService: ApiService = {
    async get<T>(url: string): Promise<T | ApiError> {
        try {
            const response = await requestClient.get<ApiResponse<T>>(url)
            return handleResponse(response)
        } catch (error) {
            return handleError(error as AxiosError)
        }
    },
    async post<T>(url: string, data: any = {}, config?: AxiosRequestConfig): Promise<T | ApiError> {
        try {
            const response = await requestClient.post<ApiResponse<T>>(url, data, config)
            return handleResponse(response)
        } catch (error) {
            return handleError(error as AxiosError)
        }
    },
    async put<T>(url: string, data: any = {}, config?: AxiosRequestConfig): Promise<T | ApiError> {
        try {
            const response = await requestClient.put<ApiResponse<T>>(url, data, config)
            return handleResponse(response)
        } catch (error) {
            return handleError(error as AxiosError)
        }
    },
    async del<T>(url: string): Promise<T | ApiError> {
        try {
            const response = await requestClient.delete<ApiResponse<T>>(url)
            return handleResponse(response)
        } catch (error) {
            return handleError(error as AxiosError)
        }
    }
}

export default apiService
