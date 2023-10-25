import { store } from "./index";

export enum AsyncStates {
  IDLE,
  LOADING,
  SUCCESS,
  FAILED
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;