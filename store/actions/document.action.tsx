"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const uploadDocs: any = createAsyncThunk(
  "document/upload",
  async (obj: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/document`,
        obj,
        { headers: { Authorization: `Bearer ${cookies.get("_user")}` } }
      );
      toast.success("Your documents has been submitted for the verification");
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

export { uploadDocs };
