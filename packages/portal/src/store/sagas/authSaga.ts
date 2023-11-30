import axios from "axios"
import { call, put, takeEvery } from "redux-saga/effects"

import { setUserError } from "../reducers/userReducer"
import { accsessTokenRequest } from "../../requests/authRequest"
import { AuthActionTypes, FetchAccessTokenAction, IFetchRegistrationAction } from "../../types/auth"
import { whoAmIRequest } from "../../requests/whoAmIRequest"
import { setAuth, setWhoAmI } from "../reducers/authReducer"
import { signUpRequest } from "../../requests/signUpRequest"

function* fetchAccsessTokenWorker(action: FetchAccessTokenAction): Generator<any> {
    const { payload } = action;
    try {
        const { data: { token } }: any = yield call(accsessTokenRequest, payload);
        yield put(setAuth(token)); // кладем инфу в стейт
        localStorage.setItem('token', token);
        const { data }: any = yield call(whoAmIRequest); // вызов функции с запросом на бэк
        yield put(setWhoAmI(data));
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setUserError(e.message));
        }
    }
}

function* fetchSignUpWorker(action: IFetchRegistrationAction): Generator<any> {
    const { payload } = action;
    try {
        const { data: { token } }: any = yield call(signUpRequest, payload);
        yield put(setAuth(token));
        localStorage.setItem('token', token);
        const { data }: any = yield call(whoAmIRequest);
        yield put(setWhoAmI(data));
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setUserError(e.message));
        }
    }
}

function* fetchWhoAmIRequestWorker() {
    try {
        const { data } = yield call(whoAmIRequest);
        yield put(setWhoAmI(data));
    } catch (e) {
        if (axios.isAxiosError(e)) {
            yield put(setUserError(e.message));
        }
    }
}

export function* authWatcher() {
    yield takeEvery(AuthActionTypes.FETCH_WHO_AM_I, fetchWhoAmIRequestWorker);
    yield takeEvery(AuthActionTypes.FETCH_ACCESS_TOKEN, fetchAccsessTokenWorker);
    yield takeEvery(AuthActionTypes.FETCH_REGISTRATION, fetchSignUpWorker);
}