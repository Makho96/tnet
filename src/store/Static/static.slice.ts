import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getManufacturers, getModels } from './static.asyncActions';
import { AsyncStates } from '../types';
import { categoriesState, manufacturersState, modelsState } from './static.states';
import { toggleManufacturerHandler, toggleModelHandler, toggleCategoriesHandler, clearChosenmanufacturersHandler, clearModelsHandler, clearCategoriesHandler } from './static.actions';

const manufacturers = createSlice({
  name: 'namufacturers',
  initialState: manufacturersState,
  reducers: {
    toggleManufacturer: toggleManufacturerHandler,
    clearchosenManufacturers: clearChosenmanufacturersHandler
  },
  extraReducers: (builder) => {
    builder.addCase(getManufacturers.pending, state => {
      state.state = AsyncStates.LOADING
      state.error = undefined
    });
    builder.addCase(getManufacturers.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload
        state.state = AsyncStates.SUCCESS
      }
    });
    builder.addCase(getManufacturers.rejected, (state, action) => {
      state.items = []
      state.error = action.error.message
      state.state = AsyncStates.FAILED
    })
  }
});


const categories = createSlice({
  name: 'categories',
  initialState: categoriesState,
  reducers: {
    toggleCategories: toggleCategoriesHandler,
    clearCategotires: clearCategoriesHandler
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, state => {
      state.state = AsyncStates.LOADING
      state.error = undefined
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload
        state.state = AsyncStates.SUCCESS
      }
    })
    builder.addCase(getCategories.rejected, (state, action) => {
      state.error = action.error.message
      state.items = []
      state.state = AsyncStates.FAILED
    })
  },
})

const models = createSlice({
  name: 'models',
  initialState: modelsState,
  reducers: {
    toggleModel: toggleModelHandler,
    clearChosenModels: clearModelsHandler
  },
  extraReducers: (builder) => {
    builder.addCase(getModels.pending, state => {
      state.state = AsyncStates.LOADING
      state.error = undefined
    });
    builder.addCase(getModels.fulfilled, (state, action) => {
      if (action.payload) {
        state.items[action.payload.key] = action.payload.data
        state.state = AsyncStates.SUCCESS  
      }
    })
    builder.addCase(getModels.rejected, (state, action) => {
      state.error = action.error.message
      state.items = {}
      state.state = AsyncStates.FAILED
    })
  },
})


const sidebar = createSlice({
  name:'sidebar',
  initialState: {open: false},
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open
    }
  }
})

const manufacturersReducer = manufacturers.reducer;
const categoriesReducer = categories.reducer
const modelsReducer = models.reducer
const sidebarReducer = sidebar.reducer

export const {toggleManufacturer, clearchosenManufacturers} = manufacturers.actions
export const {toggleModel, clearChosenModels} = models.actions
export const {toggleCategories,clearCategotires } = categories.actions
export const {toggleSidebar} = sidebar.actions

export {
  manufacturersReducer,
  categoriesReducer,
  modelsReducer,
  sidebarReducer
};