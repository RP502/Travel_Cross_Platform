import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHotels } from "@/api/hotels";
import { Hotel } from "./hotelType";

interface HotelsState {
  hotels: Hotel[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: HotelsState = {
  hotels: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch hotels data
export const fetchHotelsAsync = createAsyncThunk(
  "hotels/fetchHotels",
  async () => {
    try {
      const hotels = await fetchHotels();
      return hotels as unknown as Hotel[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = action.payload as Hotel[];
      })
      .addCase(fetchHotelsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = hotelsSlice.actions;

// Export async thunk and reducer
export default hotelsSlice.reducer;
