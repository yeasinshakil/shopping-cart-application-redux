import { ADD_CART, DECREASE_FROM_CART } from "./actionType"

const isExist = (state, payload) => state.some(item => item.id === payload.id)

const initialState = []

const reducer = (state = initialState, action) => {
    const stateCopy = [...state]
    const { type, payload } = action;
    switch (type) {

        case ADD_CART:
            if (isExist(state, payload)) {
                if (payload <= 0) {
                    return state;
                }
                return stateCopy.map((item) => item.id === payload.id ? { ...item, cartQuantity: item.cartQuantity + 1, lws_inputQuantity: item.lws_inputQuantity - 1 } : item)
            } else {
                stateCopy.push({ ...payload, cartQuantity: 1, lws_inputQuantity: payload.lws_inputQuantity - 1 });
                return stateCopy;
            }


        case DECREASE_FROM_CART: 
        const currentItem = state.find(item=> item.id === payload.id)
        if(currentItem.cartQuantity> 1) {
            return stateCopy.map(item=> item.id === payload.id ? {...item, cartQuantity: item.cartQuantity - 1, lws_inputQuantity: item.lws_inputQuantity + 1} : item)
        } else {
            return stateCopy.filter(item=> item.id !== payload.id)
        }
        default:
            return state
    }
}


export default reducer;