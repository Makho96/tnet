import { createSlice } from "@reduxjs/toolkit";
import { productsState } from "./products.state";
import { getProducts } from "./products.asyncActions";
import { AsyncStates } from "../types";

const products = createSlice({
  name: 'products',
  initialState: productsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, state => {
      state.state = AsyncStates.LOADING
      state.error = undefined
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.state = AsyncStates.SUCCESS
      state.items = action.payload.items
      state.total = action.payload.total
      state.per_page = action.payload.per_page
      state.last_page = action.payload.last_page
      state.current_page = action.payload.current_page
      
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.state = AsyncStates.FAILED
      state.error = action.error.message
    })
  }
})

export default products.reducer