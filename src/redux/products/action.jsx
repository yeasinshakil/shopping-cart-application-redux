import { PRODUCT_ADDED } from "./actionType";


const addProduct = (value) => {
    return {
        type: PRODUCT_ADDED,
        payload: value
    }
}


export {addProduct}