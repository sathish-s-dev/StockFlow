import type { SingleStockQuote, Stock } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import toast from "react-hot-toast";

interface WatchlistState {
  watchlistState: Stock[];
}

const initialState: WatchlistState = {
  watchlistState: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: { payload: Stock }) => {
      if (
        !state.watchlistState.find(
          (item) => item.symbol === action.payload.symbol
        )
      ) {
        state.watchlistState.push(action.payload);
        toast.success(action.payload.symbol + " added to watchlist");
      } else {
        console.log(action.payload.symbol + " already in watchlist");
        toast.error(action.payload.symbol + " already in watchlist");
      }
    },
    removeStockFromWatchlist: (state, action: { payload: string }) => {
      state.watchlistState = state.watchlistState.filter(
        (item) => item.symbol !== action.payload
      );
      toast.success(action.payload + " removed from watchlist");
    },
  },
});

export const { addToWatchlist, removeStockFromWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
