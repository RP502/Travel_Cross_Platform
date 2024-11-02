import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchBookingsByUserId } from "@/api/booking";
import { InforBooking } from "@/model/infoBooking";

interface BookingsState {
  bookings: InforBooking[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch bookings data
export const fetchBookingsAsync = createAsyncThunk(
  "bookings/fetchBookings",
  async (userId: string) => {
    try {
      const bookings = await fetchBookingsByUserId(userId);
      return bookings as unknown as InforBooking[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookingsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload as InforBooking[];
      })
      .addCase(fetchBookingsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = bookingsSlice.actions;

// Export async thunk and reducer
export default bookingsSlice.reducer;
