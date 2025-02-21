import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "@/services/stocksApi";
import drawerReducer from "@/features/drawerSlice";

export const store = configureStore({
  reducer: {
    [stocksApi.reducerPath]: stocksApi.reducer,
    drawer: drawerReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stocksApi.middleware),
});

// Adding setup listeners for rtk query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
