import { ADD_MANY_QUANTITY, ADD_PRODUCT_QUANTITY, PRODUCT_ADDED, REMOVE_PRODUCT_QUANTITY } from "./actionType";

const initialState = [];

const newId = (product) => {
    const maxId = product.reduce((maxId, product) => Math.max(product.id, maxId), -1)
    return maxId + 1;
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADDED:
            return [
                ...state,
                {
                    ...action.payload,
                    id: newId(state)
                }
            ]
        case REMOVE_PRODUCT_QUANTITY:
            return [...state.map(item => item.id === action.payload ? { ...item, lws_inputQuantity: item.lws_inputQuantity - 1 } : item)]
        case ADD_PRODUCT_QUANTITY:
            return [...state.map((item)=> item.id === action.payload ? {...item, lws_inputQuantity: item.lws_inputQuantity + 1} : item)]
            case ADD_MANY_QUANTITY:
                return [...state.map(item=> item.id === action.payload.id ? {...item, lws_inputQuantity: item.lws_inputQuantity + action.payload.cartQuantity} : item)]
        default:
            return state;
    }
}

export default productReducer;