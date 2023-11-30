import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>