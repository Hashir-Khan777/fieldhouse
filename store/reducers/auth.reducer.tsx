"use client";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Auth } from "@/store/actions";

const initialState = {
  loading: false,
  token: null,
  data: {},
  user: {},
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Auth.register.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
    });
    builder.addCase(Auth.verifyEmail.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
    });
    builder.addCase(Auth.login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
    });
    builder.addCase(Auth.verifyUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addMatcher(
      isAnyOf(Auth.register.pending, Auth.verifyEmail.pending, Auth.login.pending),
      (state) => {
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(Auth.register.rejected, Auth.verifyEmail.rejected, Auth.login.rejected),
      (state) => {
        state.loading = false;
      }
    );
  },
}).reducer;
