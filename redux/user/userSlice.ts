import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

// sử dụng với các  action bất đồng bộ
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    //   const response = await fetchCount(amount);
    return [];
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      
    },
    decrement: (state) => {
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
       
      });
  },
});

export const { increment, decrement } = userSlice.actions;



export default userSlice.reducer;