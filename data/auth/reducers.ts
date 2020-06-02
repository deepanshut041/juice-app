import * as actions from "./constants";

const initialState = {
    user: null,
    accessToken: null,
    errors: null
};

export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.AUTH_SIGNIN_SUCCESS:
            return { ...state, accessToken: action.accessToken };
        case actions.AUTH_SIGNIN_ERROR:
            return { ...state, errors: action.error };
        case actions.AUTH_PASSWORD_RECOVER_ERROR:
            return { ...state, errors: action.error };
        case actions.AUTH_SIGNUP_SUCCESS:
            return { ...state, user: action.user };
        case actions.AUTH_SIGNUP_ERROR:
            return { ...state, errors: action.error };
        case actions.AUTH_SIGNOUT:
            return initialState;
        default:
            return state;
    }
};