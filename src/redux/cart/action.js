import { ADD_CART, DECREASE_FROM_CART } from "./actionType"

const addToCart =(value) => {
    return {
        type: ADD_CART,
        payload: value,
    }
}
const decreaseFromCart = (product) =>{
    return{
        type: DECREASE_FROM_CART,
        payload: product,
    };
};

export {addToCart, decreaseFromCart}