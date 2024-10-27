import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Slider } from "./sliderType";
import {fetchSliders } from '@/api/sliders'

const initialState = {
  sliders: [],
};

// sử dụng với các  action bất đồng bộ
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    //   const response = await fetchCount(amount);
    return [];
  }
);

export const slidersSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    fetchSlider:  (state) => {
      // get data from api
      //const sliders = await  fetchSliders()

    },
    decrement: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {})
      .addCase(incrementAsync.fulfilled, (state, action) => {});
  },
});

export const { decrement } = slidersSlice.actions;

export default slidersSlice.reducer;
