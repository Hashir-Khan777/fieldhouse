"use client";

import { createSlice } from "@reduxjs/toolkit";
import { DocumentActions } from "@/store/actions";

const initialState = {
  loading: false,
  docs: null,
};

export default createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(DocumentActions.uploadDocs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DocumentActions.uploadDocs.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.docs = payload;
    });
    builder.addCase(DocumentActions.uploadDocs.rejected, (state) => {
      state.loading = false;
    });
  },
}).reducer;