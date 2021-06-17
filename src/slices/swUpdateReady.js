import { createSlice } from "@reduxjs/toolkit";

const swUpdateReadySlice = createSlice({
  name: "swUpdateReady",
  initialState: false,
  reducers: {
    updateReady: () => true
  }
});

const { actions, reducer } = swUpdateReadySlice;
export const { updateReady } = actions;
export default reducer;