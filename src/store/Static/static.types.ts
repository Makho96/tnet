import { AsyncStates } from "../types"

export interface Manufacturer {
  man_id: string,
  man_name: string,
  is_car: "0" | "1",
  is_spec: "0" | "1",
  is_moto: "0" | "1",
  chosen: boolean
}

export interface ManufacturersState {
  state: AsyncStates
  loading: boolean,
  items: Manufacturer[],
  error?: string
}

export interface Category {
  category_id: number,
  category_type: 0 | 1 | 2,
  has_icon: 0 | 1,
  title: string,
  seo_title: string,
  vehicle_types: number[],
  chosen: boolean
}

export interface CategoriesState {
  state: AsyncStates,
  items: Category[],
  error?: string
}

export interface Model {
  model_id: number,
  man_id: number,
  model_name: string,
  model_group: string,
  sort_order: number,
  cat_man_id: number,
  cat_model_id: number,
  cat_modif_id: number,
  is_car: boolean,
  is_moto: boolean,
  is_spec: boolean,
  show_in_salons: number,
  shown_in_slider: number,
  chosen: boolean
}

export interface ModelsState {
  state: AsyncStates,
  items: {
    [key: string]: Model[]
  },
  error?: string
}