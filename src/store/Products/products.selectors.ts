import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

const products = (state: RootState) => state.products;

export const productsData = createSelector([products], (products) => products.items)
export const totalCount = createSelector([products], (products) => products.total)