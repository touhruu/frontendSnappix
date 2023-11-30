import api from "../utils/api";
import { AppResponse } from "../shared/types";

export const whoAmIRequest: () => AppResponse<{
    id: number,
    email: string,
}> = () => api.get('auth/whoami')