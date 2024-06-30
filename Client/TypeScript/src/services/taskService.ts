import {ApiError, Task, TaskService} from "../types/api.ts";
import apiService from "./apiService.ts";


const taskService: TaskService = {
    async create<T>(data: Task): Promise<T | ApiError > {
        return apiService.post<T>('/task/create', data);
    },
    async get<T>(): Promise<T | ApiError > {
        return apiService.get<T>('/task/get');
    },
    async update<T>(data: Task): Promise<T | ApiError > {
        return apiService.put<T>('/task/update', data);
    },
    async del<T>(): Promise<T | ApiError > {
        return apiService.del<T>('/task/delete');
    }
}

export default taskService