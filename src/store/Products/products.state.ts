import { AsyncStates } from "../types";
import { ProductsState } from "./products.types";

export const productsState: ProductsState = {
  state: AsyncStates.IDLE,
  items: [],
  total: 0,
  per_page: 0,
  current_page: 0,
  last_page: 0,
  error: undefined
}