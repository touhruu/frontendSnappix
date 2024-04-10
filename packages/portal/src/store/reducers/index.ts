import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { tabReducer } from "./tabReducer";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    tabs: tabReducer,
    posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>