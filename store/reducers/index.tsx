"use client";

import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./auth.reducer";
import ToastReducer from "./toast.reducer";
import ImageReducer from "./image.reducer";

export default combineReducers({
  AuthReducer,
  ToastReducer,
  ImageReducer
});
