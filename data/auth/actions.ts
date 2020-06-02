import * as actions from "./constants";

export const signUp = (user: any) => ({
    type: actions.AUTH_SIGNUP_REQUEST,
    user
});

export const signIn = (user: any) => ({
    type: actions.AUTH_SIGNIN_REQUEST,
    user
});

export const signOut = (_: any) => ({
    type: actions.AUTH_SIGNOUT
});

export const resetPassword = (email: any) => ({
    type: actions.AUTH_PASSWORD_RECOVER_REQUEST,
    email
});