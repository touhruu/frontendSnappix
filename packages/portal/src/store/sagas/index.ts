import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga';
import { authWatcher } from './authSaga';
import { tabWatcher } from './tabSaga';
import { postsWatcher } from './postsSaga';

export function* rootSaga() {
    console.log("Example saga reached");
    yield all([userWatcher(), authWatcher(), tabWatcher(), postsWatcher()])
}