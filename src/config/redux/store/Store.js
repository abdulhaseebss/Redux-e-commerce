import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reducers/productSlice";
import cartSlice from "../reducers/cartSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice
    }
})