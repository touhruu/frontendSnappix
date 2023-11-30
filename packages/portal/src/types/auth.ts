import { IAuthData, IRegistrationData } from "@snappix/components";

export interface AuthState{
    accessToken: string | null;
    loading: boolean;
    error: null | string;
    userData: null | {
        id: number,
        email: string,
    };
};

export enum AuthActionTypes {
    FETCH_ACCESS_TOKEN = 'FETCH_ACCESS_TOKEN',
    FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS',
    FETCH_ACCESS_TOKEN_ERROR = 'FETCH_ACCESS_TOKEN_ERROR',
    FETCH_WHO_AM_I = 'FETCH_WHO_AM_I',
    FETCH_WHO_AM_I_SUCCESS = 'FETCH_WHO_AM_I_SUCCESS',
    FETCH_WHO_AM_I_ERROR = 'FETCH_WHO_AM_I_ERROR',
    FETCH_REGISTRATION = 'FETCH_REGISTRATION',
    FETCH_REGISTRATION_SUCCESS = 'FETCH_REGISTRATION_SUCCESS',
    FETCH_REGISTRATION_ERROR = 'FETCH_REGISTRATION_ERROR',
};

export interface IFetchRegistrationAction {
    type: AuthActionTypes.FETCH_REGISTRATION;
    payload: IRegistrationData;
};

export interface IFetchRegistrationSuccessAction {
    type: AuthActionTypes.FETCH_REGISTRATION_SUCCESS;
    payload: string;
};

export interface IFetchRegistrationErrorAction {
    type: AuthActionTypes.FETCH_REGISTRATION_ERROR;
    payload: string;
};

export interface IFetchWhoAmIAction {
    type: AuthActionTypes.FETCH_WHO_AM_I;
};

export interface IFetchWhoAmISuccessAction {
    type: AuthActionTypes.FETCH_WHO_AM_I_SUCCESS;
    payload: { email: string, id: number, roles: string[] };
};

export interface IFetchWhoAmIErrorAction {
    type: AuthActionTypes.FETCH_WHO_AM_I_ERROR;
    payload: string;
};

export interface FetchAccessTokenAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN;
    payload: IAuthData;
};

export interface FetchAccessTokenSuccessAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS;
    payload: string;
};

export interface FetchAccessTokenErrorAction {
    type: AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR;
    payload: string;
};

export type AuthAction = 
| FetchAccessTokenAction
| FetchAccessTokenSuccessAction
| FetchAccessTokenErrorAction
| IFetchWhoAmIAction
| IFetchWhoAmISuccessAction
| IFetchWhoAmIErrorAction
| IFetchRegistrationAction
| IFetchRegistrationSuccessAction
| IFetchRegistrationErrorAction;