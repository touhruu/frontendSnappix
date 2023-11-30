import api from "../utils/api";
import { AppResponse } from "../shared/types";

export const signUpRequest: (data: any) => AppResponse<{
    token: string
}> = (data: any) => api.post('auth/registration', data)