import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import slidersREducer from "./sliders/slidersSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sliders: slidersREducer,
  },
});
