import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTickets } from "@/api/tickets";
import { Ticket } from "./ticketType";

interface TicketsState {
  tickets: Ticket[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch tickets data
export const fetchTicketsAsync = createAsyncThunk(
  "tickets/fetchTickets",
  async () => {
    try {
      const tickets = await fetchTickets();
      return tickets as unknown as Ticket[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTicketsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload as Ticket[];
      })
      .addCase(fetchTicketsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = ticketsSlice.actions;

// Export async thunk and reducer
export default ticketsSlice.reducer;
