import type { SingleStockQuote, Stock } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
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
        toast.success("Added to watchlist");
      } else {
        console.log("Already in watchlist");
        toast.error("Already in watchlist");
      }
    },
    removeFromWatchlist: (state, action: { payload: SingleStockQuote }) => {
      state.watchlistState = state.watchlistState.filter(
        (item) => item.symbol !== action.payload.symbol
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
