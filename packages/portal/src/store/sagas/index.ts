import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga';
import { authWatcher } from './authSaga';

export function* rootSaga() {
    console.log("Example saga reached");
    yield all([userWatcher(), authWatcher()])
}