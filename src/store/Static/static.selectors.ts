import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

const manufacturers = (state: RootState) => state.manufacturers;
const categories = (state: RootState) => state.categories
const models = (state: RootState) => state.models 
const sidebar = (state: RootState) => state.sidebar

export const manufacturersData = createSelector([manufacturers], (manufacturers) => manufacturers.items)
export const manufacturersState = createSelector([manufacturers], (manufacturers) => manufacturers.state)
export const manufacturersChosen = createSelector([manufacturers], (manufacturers) => manufacturers.items.filter(item => item.chosen))
export const manufacturersError = createSelector([manufacturers], (manufacturers) => manufacturers.error)

export const categoriesData = createSelector([categories], (categories) => categories.items)
export const categoriesState = createSelector([categories], (categories) => categories.state)
export const categoriesChosen = createSelector([categories], (categories) => categories.items.filter(item => item.chosen))
export const categoriesError = createSelector([categories], (categories) => categories.error)

export const modelsData = createSelector([models], (models) => models.items)
export const modelsState = createSelector([models], (models) => models.state)
export const modelsError = createSelector([models], (models) => models.error)

export const isSidebarOpen = createSelector([sidebar], sidebar => sidebar.open);