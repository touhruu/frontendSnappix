import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts"

const initialState: PostsState = {
    posts: [],
    error: null,
    loading: false,
    page: 0,
    limit: 0,
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return { ...state, error: null, loading: true, page: action.payload.page, limit: action.payload.limit}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, error: null, posts: [...state.posts, ...action.payload] }
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

export const getAllPosts = (payload: {page: number, limit: number}) => ({ type: PostsActionTypes.FETCH_POSTS, payload: payload })
export const setPostsSuccess = (payload: any) => ({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload })
export const setPostsError = (error: string) => ({ type: PostsActionTypes.FETCH_POSTS_ERROR, payload: error })