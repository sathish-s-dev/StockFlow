import { createSlice } from "@reduxjs/toolkit";



interface drawer {
  drawer: boolean;
}
// Initial state
const initialState: drawer = {
  drawer: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    showDrawer: (state) => {
      state.drawer = true;
    },
    hideDrawer: (state) => {
      state.drawer = false;
    },
  },
});

export default drawerSlice.reducer;

// Define the type for your state

// Export actions
export const { showDrawer, hideDrawer } = drawerSlice.actions;
