import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
  productsFetching,
} from "../features/products/porductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFetching());
