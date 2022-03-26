import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartIsVisible: false, notification: null };
const uiSlice = createSlice({
    name: "ui",
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            if (action.payload === null) {
                state.notification = action.payload;
            } else {
                state.notification = {
                    status: action.payload.status,
                    title: action.payload.title,
                    message: action.payload.message,
                };
            }
        },
    },
});
export const { toggle, showNotification, notificationHandler } =
    uiSlice.actions;
export default uiSlice;
