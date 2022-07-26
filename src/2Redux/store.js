import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
