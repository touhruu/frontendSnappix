import { IAuthData, IRegistrationData } from "@snappix/components"
import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth"

const initialState: AuthState = {
    accessToken: null,
    loading: false,
    error: null,
    userData: null,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.FETCH_WHO_AM_I:
        case AuthActionTypes.FETCH_ACCESS_TOKEN:
        case AuthActionTypes.FETCH_REGISTRATION:
            return { ...state, loading: true, error: null }
        case AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS:
        case AuthActionTypes.FETCH_REGISTRATION_SUCCESS:
            return { ...state, loading: false, error: null, accessToken: action.payload }
        case AuthActionTypes.FETCH_WHO_AM_I_SUCCESS:
            return { ...state, loading: false, error: null, userData: action.payload }
        case AuthActionTypes.FETCH_WHO_AM_I_ERROR:
        case AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR:
        case AuthActionTypes.FETCH_REGISTRATION_ERROR:
            return { ...state, loading: false, error: action.payload, accessToken: null }
        default:
            return state
    }
}

export const fetchSignIn = (payload: IAuthData) => ({ type: AuthActionTypes.FETCH_ACCESS_TOKEN, payload })
export const setAuth = (payload: string) => ({ type: AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS, payload })
export const setAuthError = (error: any) => ({ type: AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR, error })
export const setWhoAmI = (payload: { email: string, id: number, roles: string[] }) => ({ type: AuthActionTypes.FETCH_WHO_AM_I_SUCCESS, payload })
export const fetchSignUp = (payload: IRegistrationData) => ({ type: AuthActionTypes.FETCH_REGISTRATION, payload })