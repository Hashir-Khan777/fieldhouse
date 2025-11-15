"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const date = new Date();
const cookies = new Cookies();

const login = createAsyncThunk(
  "auth/login",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        obj
      );
      const expires = new Date(date.setDate(date.getDate() + 30));
      cookies.set("_user", data.token, {
        path: "/",
        expires,
      });
      toast.success("Login Successfully");
      return data;
    } catch (err: any) {
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

const register = createAsyncThunk(
  "auth/register",
  async (registerForm: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        registerForm
      );
      const expires = new Date(date.setHours(date.getHours() + 1));
      cookies.set("_token", data.token, {
        path: "/",
        expires,
      });
      toast.success("Code has been sent to your email");
      return data;
    } catch (err: any) {
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (emailVerificationForm: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verifyemail`,
        emailVerificationForm,
        { headers: { Authorization: `Bearer ${cookies.get("_token")}` } }
      );
      cookies.remove("_token");
      const expires = new Date(date.setDate(date.getDate() + 30));
      cookies.set("_user", data.token, {
        path: "/",
        expires,
      });
      toast.success("Email has been verified");
      return data;
    } catch (err: any) {
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

const verifyUser: any = createAsyncThunk(
  "auth/verifyUser",
  async (obj: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verifyuser`,
        { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
      );
      return data;
    } catch (err: any) {
      dispatch(logout());
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

const updateUser: any = createAsyncThunk(
  "auth/updateUser",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/update`,
        obj,
        { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
      );
      toast.success("User updated successfully");
      return data;
    } catch (err: any) {
      toast.error(
        err.response.data.message ? err.response.data.message : err.message
      );
      return rejectWithValue(
        err.response.data.message ? err.response.data.message : err.message
      );
    }
  }
);

const logout: any = createAsyncThunk(
  "auth/logout",
  (obj: any, { rejectWithValue }) => {
    cookies.remove("_user", {
      path: "/",
    });
    toast.success("Logout successfully");
  }
);

export { register, verifyEmail, verifyUser, logout, login, updateUser };
