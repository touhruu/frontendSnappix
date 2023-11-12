export interface AuthState{
    accessToken: string | null;
    loading: boolean;
    error: null | string;
}

export enum AuthActionTypes {
    FETCH_ACCESS_TOKEN = 'FETCH_ACCESS_TOKEN',
    FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS',
    FETCH_ACCESS_TOKEN_ERROR = 'FETCH_ACCESS_TOKEN_ERROR'
}

export interface FetchAccessTokenAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN;
    payload: { email: string, password: string }
}

export interface FetchAccessTokenSuccessAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS;
    payload: string;
}

export interface FetchAccessTokenErrorAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR;
    payload: string;
}

export type AuthAction = FetchAccessTokenAction | FetchAccessTokenSuccessAction | FetchAccessTokenErrorAction;