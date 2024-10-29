import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import slidersREducer from "./sliders/slidersSlice";
import toursReducer from "./tours/toursSlice";
import locationsReducer from "./locations/locationsSlice";
import hotelsReducer from "./hotels/hotelsSlice";
import ticketsReducer from "./tickets/ticketsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sliders: slidersREducer,
    tours: toursReducer,
    locations: locationsReducer,
    hotels: hotelsReducer,
    tickets: ticketsReducer,
  },
});

// Export types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
