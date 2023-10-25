import { CategoriesState, ManufacturersState, ModelsState } from "./static.types"
import { AsyncStates } from "../types"

const manufacturersState: ManufacturersState = {
  loading: false,
  state: AsyncStates.IDLE,
  items: [],
  error: undefined
}

const categoriesState: CategoriesState = {
  items: [],
  state: AsyncStates.IDLE,
  error: undefined
}

const modelsState: ModelsState = {
  items: {},
  state: AsyncStates.IDLE,
  error: undefined
}

export {
  manufacturersState,
  categoriesState,
  modelsState
}

