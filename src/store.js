import { configureStore } from "@reduxjs/toolkit";
import { swUpdateReady } from "slices";

const store = configureStore({
  reducer: {
    swUpdateReady
  }
});

export default store;