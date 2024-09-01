import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/product-slice";
import cart from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
