import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category, Manufacturer, Model } from "./static.types";
import axios from "axios";
import Api from "../../config/Api";
import { RootState } from "../types";

export const getManufacturers = createAsyncThunk<Manufacturer[] | undefined, string[] | undefined, {state: RootState}>('static/getManufacturers', async (manFromPrams = [], thunkAPI) => {
  const { manufacturers } = thunkAPI.getState();
  if (manufacturers.items.length > 0) return
  try {
    const response = await axios.get<Manufacturer[]>('https://static.my.ge/myauto/js/mans.json')
    return response.data.map(man => ({...man, chosen: manFromPrams.indexOf(man.man_id) >= 0}))
  } catch (error: any) {
    throw new Error(error)
  }
})

export const getCategories = createAsyncThunk<Category[] | undefined, number[] | undefined, {state: RootState}>('static/getCategories', async (categoriesParams = [], thunkAPI) => {
  const { categories } = thunkAPI.getState();
  if (categories.items.length > 0) return
  try {
    const response = await Api.get<Category[]>('/cats/get')
    return response.data.map(cat => ({...cat, chosen: categoriesParams.indexOf(cat.category_id) >= 0}))
  } catch (error: any) {
    throw new Error(error)
  }
})

export const getModels = createAsyncThunk<{key: string, data: Model[]} | undefined, {id: string}, {state: RootState}>('static/getModels', async ({id}, thunkAPI) => {
  const { models } = thunkAPI.getState();
  if (models.items[id]) return
  try {
    const response = await Api.get<Model[]>(`/getManModels?man_id=${id}`)
    return {key: id, data: response.data}
  } catch (error: any) {
    throw new Error(error)
  }
})