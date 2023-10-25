import { configureStore } from '@reduxjs/toolkit';
import * as staicReducers from './Static/static.slice'
import productsReduser from './Products/products.slice'

export const store = configureStore({
  reducer: {
    manufacturers: staicReducers.manufacturersReducer,
    categories: staicReducers.categoriesReducer,
    models: staicReducers.modelsReducer,
    sidebar: staicReducers.sidebarReducer,
    products: productsReduser,
  }
})
