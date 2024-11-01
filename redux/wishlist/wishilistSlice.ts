import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWishListByUserId } from "@/api/wishlist";
import { WishItem } from "./wishItemType";

interface WishListState {
  wishlist: WishItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WishListState = {
  wishlist: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Asynchronous thunk action to fetch wishlist data
export const fetchWishListAsync = createAsyncThunk(
  "wishlist/fetchWishList",
  async (userId: string) => {
    try {
      const wishlist = await fetchWishListByUserId(userId);
      return wishlist as unknown as WishItem[];
    } catch (error) {
      console.log(error);
    }
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Other synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload as WishItem[];
      })
      .addCase(fetchWishListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const {} = wishlistSlice.actions;

// Export async thunk and reducer
export default wishlistSlice.reducer;
