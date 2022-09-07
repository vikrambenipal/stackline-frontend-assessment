import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sales: [],
    productInfo: {
        image: "",
        subtitle: "",
        tags: [],
        title: ""
    }
}

export const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        init: (state, action) => {
            state.sales = action.payload.sales;
            state.productInfo.image = action.payload.image;
            state.productInfo.subtitle = action.payload.subtitle;
            state.productInfo.tags = action.payload.tags
            state.productInfo.title = action.payload.title;
        },

    }
})

export const selectSales = (state) => state.sales.sales;
export const selectProductInfo = (state) => state.sales.productInfo;

export const { init } = salesSlice.actions;

export default salesSlice.reducer;