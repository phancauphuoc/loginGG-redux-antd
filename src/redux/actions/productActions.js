import productApi from "../../apis/productApi"
import { actionTypes } from "../constants/actionType";


export const fetchProducts = () => {
    return async function (dispath) {
        try {
            const response = await productApi.get('/products');
            dispath({
                type: actionTypes.FETCH_PRODUCTS,
                payload: response.data,
            })
        } catch (err) {
            console.log("err", err);
        }
    }
}

export const setProduct = (product) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: product
    }
}

export const selectedProductAct = (id) => {
    return async function (dispatch) {
        try {
            const response = await productApi.get(`/products/${id}`);
            dispatch({
                type: actionTypes.SELECTED_PRODUCT,
                payload: response.data
            })
        } catch (err) {
            console.log("err", err);
        }
    }
}