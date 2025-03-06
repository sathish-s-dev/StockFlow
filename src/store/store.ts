import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "@/services/stocksApi";
import drawerReducer from "@/features/drawerSlice";
import WatchListReducer from "@/features/watchlistSlice";
import themeReducer from "@/features/themeSlice";
import storage from "redux-persist/lib/storage"; // LocalStorage
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { alphaVantageApi } from "@/services/alphaVantageApi";
// import { mockStockApi } from "@/services/mockStockGraphqlApi";
import { mockStockApi } from "@/services/mockStockApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["watchlist", "theme", "drawer"], //Persist watchlist and theme
  // whitelist: ["stocksApi", "aplhaVantageApi"],  // Persist stock API data and alphaVantageApi
};

const rootReducer = combineReducers({
  [stocksApi.reducerPath]: stocksApi.reducer,
  [alphaVantageApi.reducerPath]: alphaVantageApi.reducer,
  [mockStockApi.reducerPath]: mockStockApi.reducer,
  drawer: drawerReducer,
  watchlist: WatchListReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(stocksApi.middleware)
      .concat(alphaVantageApi.middleware)
      .concat(mockStockApi.middleware),
});

// Adding setup listeners for rtk query
setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
