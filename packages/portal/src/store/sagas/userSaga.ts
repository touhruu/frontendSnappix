import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
import { setUsers, setUserError } from "../reducers/userReducer"
import { UserActionTypes } from "../../types/user"
import { callTs } from "../../shared/custom-effects"
import { AppResponse } from "../../shared/types"

const fetchUserFromApi: () => AppResponse<any[]> = () => axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker(): Generator<any> {
    try{
        const { data } = yield* callTs(fetchUserFromApi)
        yield put(setUsers(data))
    }catch(e){
        if(axios.isAxiosError(e)){
            yield put(setUserError(e.message))
        }
    }
}

export function* userWatcher() {
    yield takeEvery(UserActionTypes.FETCH_USERS, fetchUserWorker)
}