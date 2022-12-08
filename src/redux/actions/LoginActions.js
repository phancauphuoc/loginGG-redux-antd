import { LOGOUT_USER, SET_USER } from "../constants/actionType"


export const setLoginUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const setLogoutUser = (user) => {
    return {
        type: LOGOUT_USER,
        payload: user
    }
}