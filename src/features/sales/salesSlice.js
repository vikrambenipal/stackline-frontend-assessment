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
        sortRetailSales: (state, action) => {
            let newSales;
            switch(action.payload){
                case "RETAIL SALES":
                    newSales = state.sales.sort((a,b) => {
                        return a.retailSales - b.retailSales
                    })
                    state.sales = newSales;
                    break;
                case "WHOLESALES":
                    newSales = state.sales.sort((a,b) => {
                        return a.wholesaleSales - b.wholesaleSales
                    })
                    state.sales = newSales;
                    break;
                case "UNITS SOLD":
                    newSales = state.sales.sort((a,b) => {
                        return a.unitsSold - b.unitsSold
                    })
                    state.sales = newSales;
                    break;
                case "RETAILER MARGIN":
                    newSales = state.sales.sort((a,b) => {
                        return a.retailerMargin - b.retailerMargin
                    })
                    state.sales = newSales;
                    break;
                case "WEEK ENDING":
                    newSales = state.sales.sort((a,b) => {
                        const fa = a.weekEnding.split('-').join("")
                        const fb = b.weekEnding.split('-').join("")
                        return parseInt(fa) - parseInt(fb);
                    })
                    state.sales = newSales;
                    break;
                default:
            }
        }
    }
})

export const selectSales = (state) => state.sales.sales;
export const selectProductInfo = (state) => state.sales.productInfo;

export const { init, sortRetailSales } = salesSlice.actions;

export default salesSlice.reducer;