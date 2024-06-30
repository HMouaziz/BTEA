import {ApiError, List, ListService} from "../types/api.ts";
import apiService from "./apiService.ts";


const listService: ListService = {
    async create<T>(data: List): Promise<T | ApiError > {
        return apiService.post<T>('/list/create', data);
    },
    async get<T>(): Promise<T | ApiError > {
        return apiService.get<T>('/list/get');
    },
    async update<T>(data: List): Promise<T | ApiError > {
        return apiService.put<T>('/list/update', data);
    },
    async del<T>(): Promise<T | ApiError > {
        return apiService.del<T>('/list/delete');
    }
}

export default listService