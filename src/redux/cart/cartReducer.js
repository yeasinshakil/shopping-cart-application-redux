import { ADD_CART, DECREASE_FROM_CART, DELETE_FROM_CART } from "./actionType";

const initialState = [];

const isExist = (product, item) => product.some(x => x.id === item.id)


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART:
            if (isExist(state, action.payload)) {
                if (isExist.length <= 0) {
                    return state;
                } else {
                    return [...state.map((item) => item.id === action.payload.id ? { ...item, cartQuantity: item.cartQuantity + 1, lws_inputQuantity: item.lws_inputQuantity - 1 } : item)]
                }

            } else {
                state.push({ ...action.payload, cartQuantity: 1, lws_inputQuantity: action.payload.lws_inputQuantity - 1 })

                return state;
            }

        case DECREASE_FROM_CART:
            const currentId = state.find(item => item.id === action.payload.id)
            if (currentId.cartQuantity > 1) {
                return [...state.map((item) => item.id === action.payload.id ? { ...item, cartQuantity: item.cartQuantity - 1, lws_inputQuantity: item.lws_inputQuantity + 1 } : item)]
            } else {
                return [...state.filter(item => item.id !== action.payload.id)]
            }
        case DELETE_FROM_CART:
            return [...state.filter(item => item.id !== action.payload)]
        default:
            return state;
    }
}

export default cartReducer;