import { all, takeEvery, take } from "redux-saga/effects";

function* helloSaga(){
    console.log("Hello From saga")
}

export function* mainSaga() {
    yield all([
        takeEvery("Test/ALO", helloSaga)
    ]);
}