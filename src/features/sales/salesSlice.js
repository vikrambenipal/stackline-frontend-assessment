import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sales: [],
    image: "",
    subtitle: "",
    tags: [],
    title: ""
}

export const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        init: (state, action) => {
            state.sales = action.payload.sales;
        },

    }
})

export const selectSales = (state) => state.sales.sales;

export const { init } = salesSlice.actions;

export default salesSlice.reducer;