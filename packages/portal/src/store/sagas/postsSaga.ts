import { put, takeEvery } from "redux-saga/effects"
import { callTs } from "../../shared/custom-effects"
import axios from "axios"
import { AppResponse } from "../../shared/types"
import { setPostsError, setPostsSuccess } from "../reducers/postsReducer"
import { FetchPostsAction, PostsActionTypes } from "../../types/posts"

const fetchPostsFromApi: (page: number, limit: number) => AppResponse<any[]> = (page: number, limit: number) => axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

function* fetchPostsWorker({ payload }: FetchPostsAction): Generator<any> {
    try {
        const { data: posts } = yield* callTs(fetchPostsFromApi, payload.page, payload.limit);
        console.log(posts)
        yield put(setPostsSuccess(posts));
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setPostsError(e.message));
        }
    }
}

export function* postsWatcher() {
    yield takeEvery(PostsActionTypes.FETCH_POSTS, fetchPostsWorker);
}