
// https://github.com/qaq-public/springboot-demo/blob/main/src/main/java/com/qaq/demo/utils/ApiResponse.java
export interface ApiResponse<T = any> {
    success: boolean;
    code: number;
    message: string;
    data?: T;
}