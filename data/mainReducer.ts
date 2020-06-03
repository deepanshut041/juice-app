import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { mainReducer } from "./main/reducers";

export const rootReducers = combineReducers({
    blank: (state: any, action: any) => {
        if (state == null) state = []
        return state
    },
    mainReducer,
    authReducer
})