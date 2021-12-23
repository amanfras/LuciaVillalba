import{
    CHANGE_AUTH_IN,
    CHANGE_AUTH_OUT
}from './types';

export function changeAuthIn(login) {
    return ({
        type: CHANGE_AUTH_IN,
        payload: login
    })
}

export function changeAuthOut(login) {
    return ({
        type: CHANGE_AUTH_OUT,
        payload: login
    })
}