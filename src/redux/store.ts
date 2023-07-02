import { configureStore } from "@reduxjs/toolkit";
import products from "./slice/product.slice";
import cart from "./slice/cart.slice";

const store = configureStore({
    reducer: {
        products,
        cart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;