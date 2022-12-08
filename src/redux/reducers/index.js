import { combineReducers } from "redux"
import { cartReducers } from "./cartReducer";
import { loginReducer } from "./LoginReducer";
import { productReducers, selectedProduct } from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducers,
    user: loginReducer,
    productDetail: selectedProduct,
    cart: cartReducers
})

export default reducers;