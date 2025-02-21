import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    drawerState: true,
  },
  reducers: {
    showDrawer: (state) => {
      state.drawerState = true;
    },
    hideDrawer: (state) => {
      state.drawerState = false;
    },
  },
});

export const { showDrawer, hideDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
