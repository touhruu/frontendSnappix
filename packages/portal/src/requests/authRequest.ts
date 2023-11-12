import api from "../utils/api";
import { AppResponse } from "../shared/types";

export const accsessTokenRequest: (data: any) => AppResponse<{
    accessToken: string
}> = (data:any) => api.post('/login', data)