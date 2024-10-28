import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSliders } from "@/api/sliders";
import { Slider } from "./sliderType";

interface SlidersState {
  sliders: Slider[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SlidersState = {
  sliders: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch sliders data
export const fetchSlidersAsync = createAsyncThunk(
  "sliders/fetchSliders",
  async () => {
    try {
      const sliders = await fetchSliders();
      return sliders as Slider[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const slidersSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlidersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSlidersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sliders = action.payload as Slider[];
      })
      .addCase(fetchSlidersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {  } = slidersSlice.actions;
 
// Export async thunk and reducer
export default slidersSlice.reducer;
