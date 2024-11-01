import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLocations } from "@/api/locations";
import { Address, Location } from "./locationType";
import { Colors } from "@/constants/Colors";

interface LocationsState {
  addressList: Address[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LocationsState = {
  addressList: [],
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
        state.addressList = action.payload
          ? action.payload.map((item) => {
              return {
                name: item.name,
                isActived: false,
              };
            })
          : [];

      
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
