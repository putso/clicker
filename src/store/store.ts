import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loadFromLocalStorage, saveToLocalStorage } from "./LocalStorage";
import clickerSlice from "./clickerSlice";


export const store = configureStore({
  reducer: {
    cliker: clickerSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
store.subscribe(() => saveToLocalStorage(store.getState()));
