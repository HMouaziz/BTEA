import {AxiosRequestConfig} from "axios";

export interface ApiService {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T | ApiError>;

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T | ApiError>;

    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T | ApiError>;

    del<T>(url: string, config?: AxiosRequestConfig): Promise<T | ApiError>;
}

export interface ApiResponse<T> {
    data: T;
}

export interface ApiError {
    message: string;
    status?: number;
}


export interface AuthService {
    register<T>(payload: RegisterCredentials): Promise<T | ApiError>;

    login<T>(payload: LoginCredentials): Promise<T | ApiError>;

    logout<T>(): Promise<T | ApiError>;

    verifyToken<T>(): Promise<T | ApiError>;
}

export interface User {
    id: string;
    username: string;
    profilePictureUrl?: string;
    createdAt: number;
    updatedAt: number;
}

export interface LoginCredentials {
    identifier: string;
    password: string;
    nonce: string;
    timestamp: number;
}

export interface RegisterCredentials extends LoginCredentials {
    email: string;
}


export interface ListService {
    create<T>(data: List): Promise<T | ApiError>;
    get<T>(): Promise<T | ApiError>;
    update<T>(data: List): Promise<T | ApiError>;
    del<T>(): Promise<T | ApiError>;
}

export interface List {
    id: string;
    title: string;
    tasksIds: string[];
    createdAt: number;
    updatedAt: number;
}

export interface TaskService {
    create<T>(data: any): Promise<T | ApiError>;
    get<T>(): Promise<T | ApiError>;
    update<T>(data: any): Promise<T | ApiError>;
    del<T>(): Promise<T | ApiError>;
}

export enum Priority {
    URGENT = 'urgent',
    HIGH = 'high',
    NORMAL = 'Normal',
    LOW = 'low',
}

export interface Task {
    id: string;
    description: string;
    notes: string ;
    priority: Priority;
    dueDate: any; //TODO: change to proper type once implemented!
    reminder: any; //TODO: change to proper type once implemented!
    repeat: any; //TODO: change to proper type once implemented!
    createdAt: number;
    updatedAt: number;
}
