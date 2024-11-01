import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTours } from "@/api/tours";
import { Tour } from "./tourType";

interface ToursState {
  tours: Tour[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ToursState = {
  tours: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch tours data
export const fetchToursAsync = createAsyncThunk(
  "tours/fetchTours",
  async () => {
    try {
      const tours = await fetchTours();
      return tours as unknown as Tour[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToursAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchToursAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tours = action.payload as Tour[];
      })
      .addCase(fetchToursAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = toursSlice.actions;

// Export async thunk and reducer
export default toursSlice.reducer;
