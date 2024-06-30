import {ApiError, AuthService, LoginCredentials, RegisterCredentials} from "../types/api.ts";
import apiService from "./apiService.ts";

const authService: AuthService = {
    async register<T>(data: RegisterCredentials): Promise<T | ApiError > {
        return apiService.post<T>('/auth/register', data);
    },
    async login<T>(data: LoginCredentials): Promise<T | ApiError > {
        return apiService.post<T>('/auth/login', data);
    },
    async logout<T>(): Promise<T | ApiError > {
        return apiService.post<T>('/auth/logout');
    },
    async verifyToken<T>(): Promise<T | ApiError > {
        return apiService.get<T>('/auth/verifyToken');
    }
}

export default authService