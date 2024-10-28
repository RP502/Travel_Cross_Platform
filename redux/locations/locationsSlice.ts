import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "@/api/locations";
import { Location } from "./locationType";

interface LocationsState {
  locations: Location[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LocationsState = {
  locations: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch locations data
export const fetchLocationsAsync = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    try {
      const locations = await fetchLocations();
      return locations as unknown as Location[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const locationsSlice = createSlice({   
  name: "locations",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocationsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocationsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload as Location[];
      })
      .addCase(fetchLocationsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = locationsSlice.actions;

// Export async thunk and reducer
export default locationsSlice.reducer;
