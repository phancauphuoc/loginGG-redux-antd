import { LOGOUT_USER, SET_USER } from "../constants/actionType";


const initialState = {
    user: []
}

export const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            console.log("action", type);
            return { user: payload };
        case LOGOUT_USER:
            console.log("logout action");
            return { user: [] };
        default:
            return state;
    }
}