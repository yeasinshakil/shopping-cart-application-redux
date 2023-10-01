import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./products/productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from "./cart/cartReducer";
import { ADD_CART } from "./cart/actionType";
import { removeProductQuantity } from "./products/action";


const rootReducer = combineReducers({
    productReducer, cartReducer
})

const productManage = (store) => (next) => (action) => {
    switch (action.type) {
        case ADD_CART:
            store.dispatch(removeProductQuantity(action.payload.id))
            return next(action);
        default:
            return next(action)
    }
}

const middleware = applyMiddleware(productManage)

const enhance = composeWithDevTools(middleware)

const store = createStore(rootReducer, enhance)

export default store;