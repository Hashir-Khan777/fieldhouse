"use client";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ImageActions } from "@/store/actions";

const initialState = {
  loading: false,
  image: null,
};

export default createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ImageActions.uploadImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ImageActions.uploadImage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.image = payload;
    });
    builder.addCase(ImageActions.uploadImage.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;