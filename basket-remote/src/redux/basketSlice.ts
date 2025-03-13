import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
    items: any[];
}

const initialState: BasketState = {
    items: [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        removeFromBasket: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("basket", JSON.stringify(state.items));
            window.dispatchEvent(new Event("basketUpdate"));
        }
    }
});

export const { removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
