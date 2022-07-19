import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/reducer'
import productReducer from './Product/reducer'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    }
})