import { TabAction, TabActionTypes, TabState } from "../../types/tab"

const initialState: TabState = {
    tabIndex: 1,
    loading: false,
    error: null,
    userPosts: [],
    userPhotos: [],
}

export const tabReducer = (state = initialState, action: TabAction): TabState => {
    switch (action.type) {
        case TabActionTypes.FETCH_TAB:
            return { ...state, error: null, loading: true, tabIndex: action.payload }
        case TabActionTypes.FETCH_TAB_POSTS_SUCCESS:
            return { ...state, loading: false, error: null, userPosts: action.payload }
        case TabActionTypes.FETCH_TAB_PHOTOS_SUCCESS:
            return { ...state, loading: false, error: null, userPhotos: action.payload }
        case TabActionTypes.FETCH_TAB_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const setTab = (payload: number) => ({ type: TabActionTypes.FETCH_TAB, payload })
export const setTabPostsSuccess = (payload: any) => ({ type: TabActionTypes.FETCH_TAB_POSTS_SUCCESS, payload })
export const setTabPhotosSuccess = (payload: any) => ({ type: TabActionTypes.FETCH_TAB_PHOTOS_SUCCESS, payload })
export const setTabError = (error: string) => ({ type: TabActionTypes.FETCH_TAB_ERROR, payload: error })