import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../index";
import { errorHandler } from "../../helpers/errorHandler";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/users/getAll");
      return response.data;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);

export const sendTestAnswers = createAsyncThunk(
  "test/sendTestResults",
  async (payload, { rejectWithValue }) => {
    // payload => { ### }
    try {
      console.log("ticked");
      // const response = await API.get("/users/getAll");
      return payload;
    } catch (error) {
      return errorHandler(error, rejectWithValue);
    }
  },
);