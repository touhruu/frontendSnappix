import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { setUser, setUserError } from "../reducers/userReducer"
import { UserActionTypes } from "../../types/user"
import { callTs } from "../../shared/custom-effects"

const fetchUserFromApi = () => axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker(): Generator<any> {
    try{
        const { data }:any = yield callTs(fetchUserFromApi)
        yield put(setUser(data))
    }catch(e){
        if(axios.isAxiosError(e)){
            yield put(setUserError(e.message))
        }
    }
}

export function* userWatcher() {
    yield takeEvery(UserActionTypes.FETCH_USERS, fetchUserWorker)
}