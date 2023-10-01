import { ADD_CART, DECREASE_FROM_CART, DELETE_FROM_CART } from "./actionType"

const addToCart = (product) => {
    return {
        type: ADD_CART,
        payload: product,
    }
}
const decreaseFromCart = (product) => {
    return {
        type: DECREASE_FROM_CART,
        payload: product,
    };
};

const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export { addToCart, decreaseFromCart, deleteFromCart }