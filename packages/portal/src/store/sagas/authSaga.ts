import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"

import { setUser, setUserError } from "../reducers/userReducer"
import { accsessTokenRequest } from "../../requests/authRequest"
import { AuthActionTypes, FetchAccessTokenAction } from "../../types/auth"

function* fetchAccsessTokenWorker(action: FetchAccessTokenAction): Generator<any> {
    const { payload } = action;
    try{
        const { data }:any = yield call(accsessTokenRequest, payload)
        yield put(setUser(data))
    }catch(e){
        if(axios.isAxiosError(e)){
            yield put(setUserError(e.message))
        }
    }
}

export function* authWatcher() {
    yield takeEvery(AuthActionTypes.FETCH_ACCESS_TOKEN, fetchAccsessTokenWorker)
}