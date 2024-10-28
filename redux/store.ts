import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import slidersREducer from "./sliders/slidersSlice";
import toursReducer from "./tours/toursSlice";
import locationsReducer from "./locations/locationsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sliders: slidersREducer,
    tours: toursReducer,
    locations: locationsReducer,
  },
});

// Export types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
