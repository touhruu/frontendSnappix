export interface PostsState {
    posts: any[];
    error: null | string;
    loading: boolean;
    page: number;
    limit: number;
}

export interface PostsPagination {
    page: number;
    limit: number;
}

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}

export interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
    payload: PostsPagination;
}

export interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}

export interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

export type PostsAction = 
| FetchPostsAction 
| FetchPostsSuccessAction 
| FetchPostsErrorAction;