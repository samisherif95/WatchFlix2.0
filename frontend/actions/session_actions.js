export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

import { signup, login, logout } from '../util/session_api_util';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const deleteErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}
export const signUp = formUser => dispatch => signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));


export const logIn = formUser => dispatch => login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(error => dispatch(receiveErrors(error.responseJSON)));


export const logOut = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));


