import { actionTypes } from "../constants/actionType";


const initialState = {
    productss: []
}

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, productss: payload };
        case actionTypes.FETCH_PRODUCTS:
            return { ...state, productss: payload };
        // case actionTypes.SELECTED_PRODUCT:
        //     return { ...state, ...payload };
        default:
            return state;
    }
}

export const selectedProduct = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            console.log("selected product");
            return { ...state, productss: payload };
        default:
            return state;
    }
}