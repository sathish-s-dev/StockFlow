import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
      return action.payload; // Return new state explicitly
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
