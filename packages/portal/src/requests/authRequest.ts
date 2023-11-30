import api from "../utils/api";
import { AppResponse } from "../shared/types";

export const accsessTokenRequest: (data: any) => AppResponse<{
    token: string
}> = (data:any) => api.post('auth/login', data)