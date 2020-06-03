import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as actions from "./constants";
import AsyncStorage from '@react-native-community/async-storage';


function fetchToken() {
    return AsyncStorage.getItem("ACCESS_TOKEN")
}

function cleanToken() {
    return AsyncStorage.clear()
}

function* handleFetchToken(action: any) {
    const token = yield call(fetchToken);
    yield put({
        type: actions.MAIN_STORAGE_TOKEN_RESPONSE,
        accessToken: token,
    });
}

export default all([
    takeLatest(actions.MAIN_STORAGE_TOKEN_REQUEST, handleFetchToken)
]);
