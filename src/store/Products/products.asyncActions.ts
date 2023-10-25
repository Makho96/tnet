import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./products.types";
import Api from "../../config/Api";
import { RootState } from "../types";
import { SearchParams } from "../../types";

interface ProdReturType {
  items: Product[],
  current_page: number,
  last_page: number,
  per_page: number,
  total: number
}

export const getProducts = createAsyncThunk<ProdReturType, SearchParams, {state: RootState}>('static/getProducts', async (params: SearchParams) => {
  try {
    const response = await Api.get<{      
      items: Product[],
      meta: {
        current_page: number,
        last_page: number,
        per_page: number,
        total: number
      }
    }>('/products', {
      params
    })
    const result = {
      items: response.data.items,
      ...response.data.meta
    }
    return result
  } catch (error: any) {
    throw new Error(error)
  }
})