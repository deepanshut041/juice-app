import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    blank: (state:any, action:any) => {
        if(state == null) state = []
        return state
    },

})