// src/features/darkModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isEnabled: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isEnabled = !state.isEnabled;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
