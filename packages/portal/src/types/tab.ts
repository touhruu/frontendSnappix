export interface TabState{
    tabIndex: number;
    loading: boolean;
    error: null | string;
    userPosts: any[];
    userPhotos: any[];
}

export enum TabActionTypes {
    FETCH_TAB = 'FETCH_TAB',
    FETCH_TAB_POSTS_SUCCESS = 'FETCH_TAB_POSTS_SUCCESS',
    FETCH_TAB_PHOTOS_SUCCESS = 'FETCH_TAB_PHOTOS_SUCCESS',
    FETCH_TAB_ERROR = 'FETCH_TAB_ERROR'
}

export interface FetchTabAction {
    type: TabActionTypes.FETCH_TAB;
    payload: number;
}

export interface FetchTabPostsSuccessAction {
    type: TabActionTypes.FETCH_TAB_POSTS_SUCCESS;
    payload: any[];
}

export interface FetchTabPhotosSuccessAction {
    type: TabActionTypes.FETCH_TAB_PHOTOS_SUCCESS;
    payload: any[];
}

export interface FetchTabErrorAction {
    type: TabActionTypes.FETCH_TAB_ERROR;
    payload: string;
}

export type TabAction = 
| FetchTabAction 
| FetchTabPostsSuccessAction 
| FetchTabPhotosSuccessAction 
| FetchTabErrorAction;