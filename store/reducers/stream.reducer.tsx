"use client";

import { createSlice } from "@reduxjs/toolkit";
import { StreamActions } from "@/store/actions";

const initialState = {
  loading: false,
  stream: {},
  joinStream: {},
};

export default createSlice({
  name: "stream",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(StreamActions.addStream.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(StreamActions.addStream.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.stream = payload;
    });
    builder.addCase(StreamActions.addStream.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(StreamActions.getStream.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(StreamActions.getStream.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.stream = payload;
    });
    builder.addCase(StreamActions.getStream.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(StreamActions.updateStream.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      StreamActions.updateStream.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.joinStream = payload;
      }
    );
    builder.addCase(StreamActions.updateStream.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;
