export interface ApiResponse<T> {
    items: T | T[];
    status: Number;
}