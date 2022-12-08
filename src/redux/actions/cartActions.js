import productApi from "../../apis/productApi"
import { REMOTE_PRODUCT_CART, SET_SHOPPING_CART } from "../constants/actionType"


export const setCart = (id) => {
    return async function (dispatch) {
        try {
            const response = await productApi.get(`/products/${id}`);
            dispatch({
                type: SET_SHOPPING_CART,
                payload: response.data
            })
        } catch (err) {
            console.log("err", err);
        }
    }
}

export const removeCart = (idCart) => {
    return {
        type: REMOTE_PRODUCT_CART,
        payload: idCart
    }
}

