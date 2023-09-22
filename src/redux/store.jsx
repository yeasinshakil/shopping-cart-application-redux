import { createStore, combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from '../redux/cart/reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from 'redux';
import { ADD_CART } from "./cart/actionType";
import { removeProductQuantity } from '../redux/products/action'


const productManageMiddleWare = (store) => (next) => (action) => {
    switch (action.type) {
        case ADD_CART:
            store.dispatch(removeProductQuantity(action.payload.id))
            return next(action)

        default:
            return next(action)
    }
}

const rootReducer = combineReducers(
    {
        productReducer,
        cartReducer
    }
)

const middleWare = applyMiddleware(productManageMiddleWare)

const enhance = composeWithDevTools(middleWare)


const store = createStore(rootReducer, enhance)

export default store;