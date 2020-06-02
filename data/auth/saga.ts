import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from "axios";
import * as actions from "./constants";

export const request = axios.create()

function sendSignIn(email: string, password: string) {
    return request.post('/api/auth/signin/', {
        email: email,
        password: password,
    });
}

function sendSignUp(email: string, password: string, name: string) {
    return request.post('/api/auth/signup/', {
        email: email,
        password: password,
        name: name,
    });
}

function* handleSignIn(action: any) {
    const { user: { email, password } } = action;
    const { status, data } = yield call(sendSignIn, email, password);

    if (status === 200) {
        yield put({
            type: actions.AUTH_SIGNIN_SUCCESS,
            accessToken: data.token,
        });
    } else {
        yield put({
            type: actions.AUTH_SIGNIN_ERROR,
            error: 'Invalid Credentials',
        });
    }
}

function* handleSignUp(action: any) {
    const { user: { email, password, name } } = action;
    const { status, data } = yield call(sendSignUp, email, password, name);

    if (status === 200) {
        yield put({
            type: actions.AUTH_SIGNIN_SUCCESS,
            accessToken: data.token,
        });
    } else {
        yield put({
            type: actions.AUTH_SIGNIN_ERROR,
            error: 'Invalid Credentials',
        });
    }
}


