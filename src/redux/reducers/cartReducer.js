import { type } from "@testing-library/user-event/dist/type";
import { REMOTE_PRODUCT_CART, SET_SHOPPING_CART } from "../constants/actionType";


const initialState = {
    carts: [],
    usser: {}
}

export const cartReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SHOPPING_CART:
            // console.log('set shopping cart');
            // console.log("payload", payload);
            // console.log("state.cart", state.carts);
            // let newCart = state.carts.push()
            return { ...state, carts: [...state.carts, payload] };
        case REMOTE_PRODUCT_CART:
            console.log('remove item here', state);
            return { ...state }
        default:
            return state;
    }
}