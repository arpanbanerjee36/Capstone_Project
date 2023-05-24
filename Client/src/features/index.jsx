
import { createSlice, combineReducers } from "@reduxjs/toolkit";

import { getProduct, productDetails } from "../services/Api.jsx"





export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }

});




export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const product = createSlice({
    name: "product",
    initialState: {
        product: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(productDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(productDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { login, logout } = userSlice.actions;

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    products: productSlice.reducer,
    product: product.reducer
});
