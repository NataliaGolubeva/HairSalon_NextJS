import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productsReducer, { getProducts } from "./service";
import basketReducer from "./basket";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  productsState: productsReducer,
  basketState: basketReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["basketState"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
});
store.dispatch(getProducts());
export const persistor = persistStore(store);
