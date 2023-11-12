import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth"

const initialState: AuthState = {
    accessToken: null,
    loading: false,
    error: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type){
        case AuthActionTypes.FETCH_ACCESS_TOKEN:
            return { loading: true, error: null, accessToken: null }
        case AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS:
            return { loading: false, error: null, accessToken: action.payload }
        case AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR:
            return { loading: false, error: action.payload, accessToken: null }
        default:
            return state
    }
}

export const setAuth = (payload:string) => ({type: AuthActionTypes.FETCH_ACCESS_TOKEN_SUCCESS, payload})
export const setAuthError = (error:any) => ({type: AuthActionTypes.FETCH_ACCESS_TOKEN_ERROR, error})