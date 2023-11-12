import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga';

export function* rootSaga() {
    console.log("Example saga reached");
    yield all([userWatcher()])
}