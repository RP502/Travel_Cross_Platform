import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cart } from "./cartsType";
import { fetchCarts } from "@/api/cart";

interface CartsState {
  carts: Cart[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CartsState = {
  carts: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch carts data
export const fetchCartsAsync = createAsyncThunk(
  "carts/fetchCarts",
  async (userId: string) => {
    try {
      const carts = await fetchCarts(userId);
      return carts as unknown as Cart[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carts = action.payload as Cart[];
      })
      .addCase(fetchCartsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = cartsSlice.actions;

// Export async thunk and reducer
export default cartsSlice.reducer;
