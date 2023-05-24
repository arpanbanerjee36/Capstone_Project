import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const url = `http://localhost:3000`;



// Apicall for new user  
export const authenticatecSignup = async (data) => {
    try {
        const userData = await axios.post(`${url}/signup`, data);
        return userData.data;

    } catch (err) {
        alert(`==>${err.response.data.message}<==`)

    }
}


export const authenticatecLogin = async (data) => {
    try {
        const userData = await axios.post(`${url}/signin`, data);
        return userData.data;
    } catch (err) {
        alert(`==>${err.response.data.message}<==`)
    }
}


export const getProduct = createAsyncThunk(
    "Products/getData",
    async () => {
        try {
            let response = await axios.get(`${url}/products `);
            return response.data
        } catch (err) {
            console.log("error while calling get products api", err.message);
        }
    })

export const productDetails = createAsyncThunk(
    "productDetails",
    async (id) => {
        try {
            let response = await axios.get(`${url}/product/${id}`);
            return response.data
        } catch (err) {
            console.log("error while calling get product api", err.message);
        }

    })