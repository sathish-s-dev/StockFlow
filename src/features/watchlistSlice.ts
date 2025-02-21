import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WatchlistState {
  watchlistState: string[];
}

const initialState: WatchlistState = {
  watchlistState: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: { payload: string }) => {
      state.watchlistState.push(action.payload);
    },
    removeFromWatchlist: (state, action: { payload: string }) => {
      state.watchlistState = state.watchlistState.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
