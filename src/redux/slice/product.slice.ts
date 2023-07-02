import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Product {
    title: string,
    price: number,
    id: number
}

const initialState = [
    { title: 'Title 1', price: 60, id: 1 },
    { title: 'Title 2', price: 40, id: 2 },
    { title: 'Title 3', price: 50, id: 3 },
]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => state.filter(item => item.id !== action.payload),
    }
})

export const getProductsSelector = (state: RootState) => state.products

export const { add, remove } = productSlice.actions;
export default productSlice.reducer;