import { put, takeEvery } from "redux-saga/effects"
import { callTs } from "../../shared/custom-effects"
import axios from "axios"
import { TabAction, TabActionTypes } from "../../types/tab"
import { setTabError, setTabPhotosSuccess, setTabPostsSuccess } from "../reducers/tabReducer"
import { AppResponse } from "../../shared/types"

const fetchPostsFromApi: () => AppResponse<any[]> = () => axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
const fetchPhotoFromApi: () => AppResponse<any[]> = () => axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')

function* fetchTabWorker({ payload }: TabAction): Generator<any> {
    try {
        switch (payload) {
            case 1:
                const { data: posts } = yield* callTs(fetchPostsFromApi);
                yield put(setTabPostsSuccess(posts));
            break;
            case 2:
                const { data: photos } = yield* callTs(fetchPhotoFromApi);
                yield put(setTabPhotosSuccess(photos));
            break;
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setTabError(e.message))
        }
    }
}

export function* tabWatcher() {
    yield takeEvery(TabActionTypes.FETCH_TAB, fetchTabWorker)
}