import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import auth from "./auth/slice";
import product from "./product/slice";
import ui from "./ui";

const prod = process.env.NODE_ENV === "production";
const rootReducer = combineReducers({auth, product, ui});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (prod) return getDefaultMiddleware();
    else return getDefaultMiddleware();
  },
  devTools: !prod,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;
