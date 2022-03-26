import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items: [],
    totalQuantity: 0,
    changed: false,
}
const cartSlice = createSlice({
    name: "cart",
    initialState:initialState ,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items ;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== itemId);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const { removeItemFromCart, addItemToCart, replaceCart } =
    cartSlice.actions;
    
    
export default cartSlice;
