import { PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, Category, ManufacturersState, Model, ModelsState } from "./static.types";

export const toggleManufacturerHandler = (state: ManufacturersState, action: PayloadAction<string[]>) => {
  state.items = state.items.map(man => ({
    ...man,
    chosen: action.payload.indexOf(man.man_id) >= 0 ? !man.chosen : man.chosen
  }))
}

export const clearChosenmanufacturersHandler = (state: ManufacturersState) => {
  state.items = state.items.map(item => ({...item, chosen: false}))
}

export const toggleModelHandler = (state: ModelsState, action: PayloadAction<{man_id: string, model_id: number}>) => {
  if (state.items[action.payload.man_id]) {
    state.items[action.payload.man_id] = state.items[action.payload.man_id].map(item => ({
      ...item,
      chosen: item.model_id === action.payload.model_id ? !item.chosen: item.chosen
    }))
  }
}

export const clearModelsHandler = (state: ModelsState) => {
  const keys = Object.keys(state.items);

  for (let i = 0; i < keys.length; i++) {
    state.items[keys[i]] = state.items[keys[i]].map(item => ({...item, chosen: false}))
  }
}

export const toggleCategoriesHandler = (state: CategoriesState, action: PayloadAction<number>) => {
  state.items = state.items.map((item) => ({
    ...item,
    chosen: item.category_id === action.payload ? !item.chosen : item.chosen
  }))
}

export const clearCategoriesHandler = (state: CategoriesState) => {
  state.items = state.items.map((item) => ({
    ...item,
    chosen: false
  }))
}
