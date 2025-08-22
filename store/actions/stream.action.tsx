"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const addStream = createAsyncThunk(
  "stream/add",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/stream/add`,
        obj
      );
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

const getStream = createAsyncThunk(
  "stream/get/id",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/stream/${obj.id}`,
      );
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

const updateStream = createAsyncThunk(
  "stream/update/id",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/stream/${obj.id}`,
        obj
      );
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

export { addStream, getStream, updateStream }