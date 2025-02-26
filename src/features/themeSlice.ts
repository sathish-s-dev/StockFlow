import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: localStorage.getItem("theme") || "light",
  reducers: {
    setTheme: (state, action) => (state = action.payload),
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
