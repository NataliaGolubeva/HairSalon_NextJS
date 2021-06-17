import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productsReducer from "./service";
import basketReducer from "./basket";

const rootReducer = combineReducers({
  productsState: productsReducer,
  basketState: basketReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
