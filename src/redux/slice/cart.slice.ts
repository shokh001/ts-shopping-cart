import { RootState } from "../store";
import { Product } from "./product.slice";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartProduct extends Product {
    amout: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as CartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productIndex = state.findIndex(item => item.id === action.payload.id)
            if (productIndex !== -1) {
                state[productIndex].amout += 1;
            } else {
                state.push({ ...action.payload, amout: 1 })
            }
        },
        removeToCart: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex(item => item.id === action.payload)
            if (state[productIndex].amout > 1) {
                state[productIndex].amout -= 1;
            } else {
                return state.filter(item => item.id !== action.payload)
            }
        },
    }
})

export const getCartProducts = (state: RootState) => state.cart
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.amout * next.price), 0)
export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer