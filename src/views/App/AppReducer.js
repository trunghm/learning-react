import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../utils/redux/initialState";

// IMPORTANT: Note that with @reduxjs/toolkit, you can change state directly.

const appSlice = createSlice({
  name: "app",
  initialState: initialState.appReducer,
  reducers: {
    showLoading(state, action) {
      state.loading = true;
    },
    hideLoading(state, action) {
      state.loading = false;
    }
  }
});

export const { showLoading, hideLoading } = appSlice.actions;

export default appSlice.reducer;
