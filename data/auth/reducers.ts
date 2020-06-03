import * as actions from "./constants";
import { combineReducers } from "redux";

const initialState = {
    error: null,
    success: null
}

const signInReducer = (state = initialState, action: any) => {
    if (action.type == actions.AUTH_SIGNIN_SUCCESS || action.type == actions.AUTH_SIGNIN_ERROR)
        return { ...state, success: action.success, error: action.error }
    else
        return state
}

export const authReducer = combineReducers({
    signInReducer
})